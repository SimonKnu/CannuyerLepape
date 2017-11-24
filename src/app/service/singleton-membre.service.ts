import {Injectable } from '@angular/core';
import {Membre} from "../models/membre";
import {ConnexionService} from "./service-connexion.service";
import {Router} from "@angular/router";

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
    });
    this.isConnected=true;
  }
  supprimerConnexion(){
    this.membre=null;
    this.isConnected=false;
    localStorage.removeItem("tokenStorage");
    this.router.navigate([""]);
  }
}
