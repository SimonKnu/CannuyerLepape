import {Component, OnInit} from '@angular/core';
import {ServiceConnexionService} from "../service/service-connexion.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  private tmpEmail:string="";
  private tmpMot_de_passe:string="";

  constructor(private connexionService:ServiceConnexionService,public router:Router) { }

  ngOnInit() {
  }

  public connexion() {
    this.connexionService.getConnexion(this.tmpEmail, this.tmpMot_de_passe).subscribe(token => {
      console.log(token)
      if(token === "error" || token === ""){

      }
      else {
        this.router.navigate(["account"]);
      }
    });
    this.tmpEmail="";
    this.tmpMot_de_passe="";
  }
}
