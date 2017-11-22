import {Component, OnInit} from '@angular/core';
import {ServiceConnexionService} from "../service/service-connexion.service";
import {Router} from "@angular/router";
import {MembreConnecterService} from "../service/membre-connecter.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {

  private tmpMail:string="";
  private tmpMot_de_passe:string="";

  constructor(private connexionService:ServiceConnexionService,private router:Router,private membreConnecter:MembreConnecterService) { }

  ngOnInit() {
  }

  public connexion() {
    let mail:string = this.tmpMail;
    let mdp:string = this.tmpMot_de_passe;

    this.connexionService.getConnexion(mail, mdp).subscribe(token => {
      if(token === "error" || token === ""){
      }
      else {
        localStorage.setItem("tokenStorage",token);
        this.membreConnecter.creerConnexion(mail);
        this.router.navigate(["account"]);
      }
    });

    this.tmpMail="";
    this.tmpMot_de_passe="";
  }
}
