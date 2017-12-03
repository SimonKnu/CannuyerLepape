import {Injectable } from '@angular/core';
import {Membre} from "../models/membre";
import {ConnexionService} from "./service-connexion.service";
import {Router} from "@angular/router";
import {ModalLogInComponent} from "../accueil/nav-bar/modal-log-in/modal-log-in.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AchatService} from "./achat.service";
import {MusiqueService} from "./service-musique.service";
import {ModalService} from "./modal-service.service";

@Injectable()
export class SingletonMembreService {
  private _membre:Membre=new Membre();
  private _isConnected:boolean=false;

  constructor(private connexionService:ConnexionService,private refModal:ModalService, private modalService:NgbModal, private router:Router, private serviceMusique:MusiqueService) {
  }

  get membre(): Membre {
    return this._membre;
  }
  set membre(value: Membre) {
    this._membre = value;
  }
  set isConnected(value: boolean) {
    this._isConnected = value;
  }
  get isConnected(): boolean {
    return this._isConnected;
  }



  creerConnexion(mail:string){
    this.connexionService.getMembre(mail).subscribe(membre => {
      this.membre = Membre.fromJSON(membre);
      this.isConnected=true;
      this.storerInfo();

      this.serviceMusique.getMusiqueAchat(this.membre.mail,0).subscribe(listeMusique => {
        localStorage.setItem("nbPanier",listeMusique.length+"");
      });
    });
  }
  supprimerConnexion(){
    this.membre=new Membre();
    this.isConnected=false;
    localStorage.clear();
    this.router.navigate([""]);
  }

  private storerInfo(){
    localStorage.setItem("nom",this.membre.nom);
    localStorage.setItem("prenom",this.membre.prenom);
    localStorage.setItem("telephone",this.membre.telephone);
    localStorage.setItem("date_naissance",this.membre.date_naissance);
    localStorage.setItem("pays",this.membre.pays);
    localStorage.setItem("ville",this.membre.ville);
    localStorage.setItem("rue",this.membre.rue);
    localStorage.setItem("code_postal",this.membre.code_postal+"");
    localStorage.setItem("argent",this.membre.argent+"");
    localStorage.setItem("date_inscription",this.membre.date_inscription);
    localStorage.setItem("administrateur",this.membre.administrateur+"");
  }
}
