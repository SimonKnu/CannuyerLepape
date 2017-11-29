import {Injectable } from '@angular/core';
import {Membre} from "../models/membre";
import {ConnexionService} from "./service-connexion.service";
import {Router} from "@angular/router";
import {ModalLogInComponent} from "../accueil/nav-bar/modal-log-in/modal-log-in.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class SingletonMembreService {
  private _membre:Membre=new Membre();
  private _isConnected:boolean=false;

  constructor(private connexionService:ConnexionService, private router:Router) {
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
    });
  }
  supprimerConnexion(){
    this.membre=new Membre();
    this.isConnected=false;
    localStorage.clear();
    this.router.navigate([""]);
  }
  reconnexion(){
    this.supprimerConnexion();
    //Ouvrir le popUp à partir d'ici
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
