import { Component, OnInit } from '@angular/core';
import {SingletonMembreService} from "../../service/singleton-membre.service";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private _singletonMembre:SingletonMembreService, private auth:AuthService) { }


  ngOnInit() {
    if(this.auth.isAuthenticated()){
      this._singletonMembre.membre.mail=localStorage.getItem("mail");
      this._singletonMembre.membre.nom=localStorage.getItem("nom");
      this._singletonMembre.membre.prenom=localStorage.getItem("prenom");
      this._singletonMembre.membre.telephone=localStorage.getItem("telephone");
      this._singletonMembre.membre.date_naissance=localStorage.getItem("date_naissance");
      this._singletonMembre.membre.pays=localStorage.getItem("pays");
      this._singletonMembre.membre.ville=localStorage.getItem("ville");
      this._singletonMembre.membre.rue=localStorage.getItem("rue");
      this._singletonMembre.membre.code_postal= Number(localStorage.getItem("code_postal"));
      this._singletonMembre.membre.argent= Number(localStorage.getItem("argent"));
      this._singletonMembre.membre.date_inscription=localStorage.getItem("date_inscription");
      let bool:string = localStorage.getItem("administrateur");
      if(bool ==="true"){
        this._singletonMembre.membre.administrateur=true;
      }
      else {
        this._singletonMembre.membre.administrateur=false;
      }

      this._singletonMembre.isConnected=true;
    }
  }


  get singletonMembre(): SingletonMembreService {
    return this._singletonMembre;
  }
}
