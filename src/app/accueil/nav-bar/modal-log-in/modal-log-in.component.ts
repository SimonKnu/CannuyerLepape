import {Component, ViewEncapsulation} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

import {ConnexionService} from "../../../service/service-connexion.service";
import {SingletonMembreService} from "../../../service/singleton-membre.service";
import {ModalService} from "../../../service/modal-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal-log-in',
  templateUrl: './modal-log-in.component.html',
  encapsulation:ViewEncapsulation.None,
  styles:[`
    .milieu-ecran .modal-dialog{
      position: absolute;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
    }
  `]
})

export class ModalLogInComponent {
  private tmpMail:string="";
  private tmpMot_de_passe:string="";

  constructor(private modalService:ModalService, private connexionService:ConnexionService, private singletonMembre:SingletonMembreService, private router:Router) {}

  public connexion() {
    let mail:string = this.tmpMail;
    let mdp:string = this.tmpMot_de_passe;

    this.connexionService.getConnexion(mail, mdp).subscribe(token => {
      if(token === "error" || token === ""){
      }
      else {
        localStorage.setItem("token",token);
        localStorage.setItem("mail",mail);
        this.singletonMembre.creerConnexion(mail);
      }
    });

    this.tmpMail="";
    this.tmpMot_de_passe="";
  }

  fermer() {
    this.modalService.modalLogin.close();
    this.router.navigate(["wait"]);
  }
}
