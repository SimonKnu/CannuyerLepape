import {Component, OnInit, ViewRef} from '@angular/core';
import {AchatService} from "../../service/achat.service";
import {SingletonMembreService} from "../../service/singleton-membre.service";
import {Membre} from "../../models/membre";
import {ConnexionService} from "../../service/service-connexion.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit{

  private totalAPayer:number;
  private _modifOk:boolean=false;
  private nom:string="";
  private prenom:string="";
  private telephone:string="";
  private date_naissance:string="";
  private pays:string="";
  private ville:string="";
  private rue:string="";
  private code_postal:number=0;

  constructor( private serviceAchat:AchatService, private _singletonMembre:SingletonMembreService, private serviceConnnexion:ConnexionService, private router:Router) { }

  ngOnInit() {
    this.totalAPayer = this.serviceAchat.totalPanier;


    this.nom = this._singletonMembre.membre.nom;
    this.prenom = this._singletonMembre.membre.prenom;
    this.telephone = this._singletonMembre.membre.telephone;
    this.date_naissance = this._singletonMembre.membre.date_naissance;
    this.pays = this._singletonMembre.membre.pays;
    this.ville =this._singletonMembre.membre.ville;
    this.rue = this._singletonMembre.membre.rue;
    this.code_postal = this._singletonMembre.membre.code_postal;
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


    if(m.equals(this._singletonMembre.membre)){
      this.modifOk = false;
    }
    else {
      this.serviceConnnexion.updateMembre(m).subscribe(test =>{
        if(test==="OK"){
          this._singletonMembre.creerConnexion(m.mail);
        }
      });
      this.modifOk = true;
    }
  }

  set modifOk(value: boolean) {
    this._modifOk = value;
  }
}
