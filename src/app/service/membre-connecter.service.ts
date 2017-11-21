import { Injectable } from '@angular/core';
import {Membre} from "../models/membre";
import {ServiceConnexionService} from "./service-connexion.service";

@Injectable()
export class MembreConnecterService {
  private _membre:Membre=null;

  constructor(private connexionService:ServiceConnexionService) {

  }



  get membre(): Membre {
    return this._membre;
  }
  set membre(value: Membre) {
    this._membre = value;
  }



  creerConnexion(token:string,pseudo:string){
    this.connexionService.getMembre(pseudo).subscribe(membre => {
      this.membre = Membre.fromJSON(membre);
    });
    this.membre.token = token;
  }
  supprimerConnexion(){
    this.membre=null;
    this.membre.token=null;
  }
}
