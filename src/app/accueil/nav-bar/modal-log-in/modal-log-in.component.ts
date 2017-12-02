import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {ModalDismissReasons, NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

import {ConnexionService} from "../../../service/service-connexion.service";
import {SingletonMembreService} from "../../../service/singleton-membre.service";

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
  closeResult: string;
  private tmpMail:string="";
  private tmpMot_de_passe:string="";
  private modalRef:NgbModalRef;

  constructor(private modalService: NgbModal, private connexionService:ConnexionService, private singletonMembre:SingletonMembreService) {}

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
        this.modalRef.close();
      }
    });

    this.tmpMail="";
    this.tmpMot_de_passe="";
  }

  open(content) {
    this.modalRef = this.modalService.open(content,{ windowClass: 'milieu-ecran' });
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    }
    else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    }
    else {
      return  `with: ${reason}`;
    }
  }
}
