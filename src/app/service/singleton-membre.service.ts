import {Injectable } from '@angular/core';
import {Membre} from "../models/membre";
import {ConnexionService} from "./service-connexion.service";
import {Router} from "@angular/router";

@Injectable()
export class SingletonMembreService {
  private _membre:Membre=new Membre();
  private _isConnected:boolean=false;

  constructor(private connexionService:ConnexionService) {
  }

  get membre(): Membre {
    return this._membre;
  }
  set membre(value: Membre) {
    this._membre = value;
    console.log(this._membre);
  }

  set isConnected(value: boolean) {
    this._isConnected = value;
  }
  get isConnected(): boolean {
    return this.isConnected;
  }



  creerConnexion(mail:string){
    this.connexionService.getMembre(mail).subscribe(membre => {
      this.membre = Membre.fromJSON(membre);
    });
  }
  supprimerConnexion(){
    this.membre=null;
    localStorage.removeItem("tokenStorage");
  }



  private initialiser(){
    if(localStorage.getItem("tokenStorage")===null){
      this.isConnected = false;
    }
    this.isConnected = false;
  }
}
