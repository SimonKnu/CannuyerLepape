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

  constructor(private connexionService:ServiceConnexionService,private router:Router) { }

  ngOnInit() {
  }

  public connexion(){
    const DISPLAY_CONNEXION = () =>  this.router.navigate(["/account"]);
    const DISPLAY_ERROR = (error) => console.error(error);
    this.connexionService.getConnexion(this.tmpEmail,this.tmpMot_de_passe).subscribe(DISPLAY_CONNEXION,DISPLAY_ERROR);
    this.tmpEmail="";
    this.tmpMot_de_passe="";
  }

}
