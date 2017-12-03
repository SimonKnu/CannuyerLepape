import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SingletonMembreService} from "../service/singleton-membre.service";
import {Membre} from "../models/membre";
import {ConnexionService} from "../service/service-connexion.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit{
  private _modifOk:boolean=false;
  private nom:string="";
  private prenom:string="";
  private telephone:string="";
  private date_naissance:string="";
  private pays:string="";
  private ville:string="";
  private rue:string="";
  private code_postal:number=0;


  constructor(private _membreConnecter:SingletonMembreService, private serviceConnexion:ConnexionService) {}

  ngOnInit() {
    this.nom = this.membreConnecter.membre.nom;
    this.prenom = this.membreConnecter.membre.prenom;
    this.telephone = this.membreConnecter.membre.telephone;
    this.date_naissance = this.membreConnecter.membre.date_naissance;
    this.pays = this.membreConnecter.membre.pays;
    this.ville =this.membreConnecter.membre.ville;
    this.rue = this.membreConnecter.membre.rue;
    this.code_postal = this.membreConnecter.membre.code_postal;
  }


  get modifOk(): boolean {
    return this._modifOk;
  }
  set modifOk(value: boolean) {
    this._modifOk = value;
  }

  get membreConnecter(): SingletonMembreService {
    return this._membreConnecter;
  }
  set membreConnecter(value: SingletonMembreService) {
    this._membreConnecter = value;
  }


  public mettreAJour(){
    let m:Membre = new Membre();
    m.mail = this.membreConnecter.membre.mail;

    m.nom = this.nom;
    m.prenom = this.prenom;
    m.telephone = this.telephone;
    m.date_naissance = this.date_naissance;
    m.pays = this.pays;
    m.ville = this.ville;
    m.rue = this.rue;
    m.code_postal = this.code_postal;


    if(m.equals(this.membreConnecter.membre)){
      this.modifOk = false;
    }
    else {
      this.serviceConnexion.updateMembre(m).subscribe(test =>{
        if(test==="OK"){
          this.membreConnecter.creerConnexion(m.mail);
        }
      });
      this.modifOk = true;
    }
  }
}
