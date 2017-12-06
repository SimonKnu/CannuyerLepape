import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ModalService} from "../../../../service/modal-service.service";
import {ConnexionService} from "../../../../service/service-connexion.service";

@Component({
  selector: 'app-modal-mail',
  templateUrl: './modal-mail.component.html',
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

export class ModalMailComponent {
  private tmpMail:string="";
  private tmpNom:string="";
  private tmpPrenom:string="";

  private buttonWait:boolean=false;
  private testResetOk:boolean=true;
  private testResetPasOk:boolean=true;

  constructor(private modalService:ModalService, private connexionService:ConnexionService) {}

  public resetPassword() {
    this.buttonWait=true;
    this.changePassword();
  }

  private changePassword(){
    this.connexionService.updateForgetPassword(this.tmpMail,this.tmpNom,this.tmpPrenom,"mdp").subscribe(val => {
      if(val == "OK"){
        this.testResetOk=false;
        this.testResetPasOk=true;
        this.tmpNom="";
        this.tmpPrenom="";
      }
      else {
        this.testResetPasOk=false;
        this.testResetOk=true;
      }

      this.buttonWait=false;
    })
  }

  fermer() {
    this.modalService.modalMail.close();
  }
}
