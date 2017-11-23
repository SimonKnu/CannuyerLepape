import {Component} from '@angular/core';
import {ModalDismissReasons, NgbActiveModal, NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

import {ConnexionService} from "../../../service/service-connexion.service";
import {SingletonMembreService} from "../../../service/singleton-membre.service";

@Component({
  selector: 'app-modal-log-in',
  templateUrl: './modal-log-in.component.html',
  styles:[`
    .modal-dialog {
      margin: auto;
      position: static;
      top:0;
      right: 0;
      bottom: 0;
      left: 0;
    }`]
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
        localStorage.setItem("tokenStorage",token);
        this.singletonMembre.creerConnexion(mail);
        this.modalRef.close();
      }
    });

    this.tmpMail="";
    this.tmpMot_de_passe="";
  }



  open(content) {
    this.modalRef = this.modalService.open(content, { windowClass: 'modal-dialog' });
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
