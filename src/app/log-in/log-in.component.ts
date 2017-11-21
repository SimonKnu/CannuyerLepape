import {Component, OnInit} from '@angular/core';
import {ServiceConnexionService} from "../service/service-connexion.service";
import {Router} from "@angular/router";
import {MembreConnecterService} from "../service/membre-connecter.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers: [MembreConnecterService],
})
export class LogInComponent implements OnInit {

  private tmpPseudo:string="";
  private tmpMot_de_passe:string="";

  constructor(private connexionService:ServiceConnexionService,private router:Router,private membreConnecter:MembreConnecterService) { }

  ngOnInit() {
  }

  public connexion() {
    this.connexionService.getConnexion(this.tmpPseudo, this.tmpMot_de_passe).subscribe(token => {
      if(token === "error" || token === ""){

      }
      else {
        this.membreConnecter.creerConnexion(token, this.tmpPseudo);
        this.router.navigate(["account"]);
      }
    });
    this.tmpPseudo="";
    this.tmpMot_de_passe="";
  }
}
