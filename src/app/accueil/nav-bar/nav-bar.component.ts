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
      this._singletonMembre.creerConnexion(this._singletonMembre.membre.mail);
    }
  }


  get singletonMembre(): SingletonMembreService {
    return this._singletonMembre;
  }
}
