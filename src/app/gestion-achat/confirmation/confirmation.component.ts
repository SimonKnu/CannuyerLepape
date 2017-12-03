import {Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation, ViewRef} from '@angular/core';
import {AchatService} from "../../service/achat.service";
import {SingletonMembreService} from "../../service/singleton-membre.service";
import {Membre} from "../../models/membre";
import {ConnexionService} from "../../service/service-connexion.service";
import {Router} from "@angular/router";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ModalPayementComponent} from "../modal-payement/modal-payement.component";
import {ModalService} from "../../service/modal-service.service";
import {MusiqueService} from "../../service/service-musique.service";
import {Musique} from "../../models/musique";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit{

  private listeMusiquePanier: Musique[] = [];

  private checked:boolean=false;

  private nom:string="";
  private prenom:string="";
  private telephone:string="";
  private date_naissance:string="";
  private pays:string="";
  private ville:string="";
  private rue:string="";
  private code_postal:number;

  constructor(private musiqueService:MusiqueService,private modalService:NgbModal, private refModal:ModalService, private serviceAchat:AchatService, private _singletonMembre:SingletonMembreService, private serviceConnnexion:ConnexionService, private router:Router) { }

  ngOnInit() {
    this.nom = this._singletonMembre.membre.nom;
    this.prenom = this._singletonMembre.membre.prenom;
    this.telephone = this._singletonMembre.membre.telephone;
    this.date_naissance = this._singletonMembre.membre.date_naissance;
    this.pays = this._singletonMembre.membre.pays;
    this.ville =this._singletonMembre.membre.ville;
    this.rue = this._singletonMembre.membre.rue;
    this.code_postal = this._singletonMembre.membre.code_postal;

    this.musiqueService.getMusiqueAchat(this._singletonMembre.membre.mail,0).subscribe(listeMusique => {
      this.listeMusiquePanier = Musique.fromJSONs(listeMusique);
    });
  }



  ouvrir(){
    this.refModal.modalPayement = this.modalService.open(ModalPayementComponent,{windowClass:'milieu-ecran'});
  }

  public payer(){
    this.mettreAJour();
    this.ouvrir();
  }

  public mettreAJour(){
    let m:Membre = new Membre();
    m.mail = this._singletonMembre.membre.mail;

    m.nom = this.nom;
    m.prenom = this.prenom;
    m.telephone = this.telephone;
    m.date_naissance = this.date_naissance;
    m.pays = this.pays;
    m.ville = this.ville;
    m.rue = this.rue;
    m.code_postal = this.code_postal;


    if(!m.equals(this._singletonMembre.membre)){
      this.serviceConnnexion.updateMembre(m).subscribe(test =>{
        if(test==="OK"){
          this._singletonMembre.creerConnexion(m.mail);
        }
      });
    }
  }

  public getTotal(){
    let somme:number=0;
    for(let i : number = 0; i < this.listeMusiquePanier.length ;i++){
      somme+=this.listeMusiquePanier[i].prix;
    }
    return somme;
  }

  changeChecked(e){
    this.checked= e.target.checked;
    console.log(this.checked);
  }
}
