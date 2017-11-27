import { Component, OnInit } from '@angular/core';
import {SingletonMembreService} from "../service/singleton-membre.service";
import {ConnexionService} from "../service/service-connexion.service";

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  private soldeactuel:number = this._membreConnecter.membre.argent;
  private _solde:number= 0;
  private newsolde:number = this.soldeactuel + this._solde;
  private _modifOk:boolean=false;

  constructor(private _membreConnecter: SingletonMembreService, private connexion:ConnexionService) { }

  ngOnInit() {
  }


  get solde(): number {
    return this._solde;
  }
  set solde(value: number) {
    this._solde = value;
    this.newsolde = this._membreConnecter.membre.argent + this._solde;
  }

  get modifOk(): boolean {
    return this._modifOk;
  }
  set modifOk(value: boolean) {
    this._modifOk = value;
  }

  public ajouterSolde() {
    this._membreConnecter.membre.argent = this.newsolde;
    this.soldeactuel = this.newsolde;
    this._solde = 0;
    this.connexion.updateArgent(this._membreConnecter.membre.mail, this._membreConnecter.membre.argent).subscribe(val =>{
      if(val==="OK"){
        this.modifOk=true;
      }
      else {
        this.modifOk=false;
      }
    });
  }
}
