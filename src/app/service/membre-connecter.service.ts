import { Injectable } from '@angular/core';
import {Membre} from "../models/membre";
import {ServiceConnexionService} from "./service-connexion.service";

@Injectable()
export class MembreConnecterService {
  private _membre:Membre=new Membre();

  constructor(private connexionService:ServiceConnexionService) {
  }



  get membre(): Membre {
    return this._membre;
  }
  set membre(value: Membre) {
    this._membre = value;
  }



  creerConnexion(mail:string){
    this.connexionService.getMembre(mail).subscribe(membre => {
      this.membre = Membre.fromJSON(membre);
      this.membre.token=localStorage.getItem("tokenStorage");
    });
  }
  supprimerConnexion(){
    this.membre=null;
    localStorage.removeItem("tokenStorage")
  }
}
