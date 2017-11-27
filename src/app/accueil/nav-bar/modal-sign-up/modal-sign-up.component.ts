import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ModalDismissReasons, NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ConnexionService} from "../../../service/service-connexion.service";
import {SingletonMembreService} from "../../../service/singleton-membre.service";
import {Membre} from "../../../models/membre";

@Component({
  selector: 'app-modal-sign-up',
  templateUrl: './modal-sign-up.component.html',
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
  `],
})

export class ModalSignUpComponent {
  closeResult: string;
  private modalRef:NgbModalRef;

  private tmpPassword:string="";
  private tmpConfirmPassword:string="";
  private tmpNom:string="";
  private tmpPrenom:string="";
  private tmpMail:string="";

  constructor(private modalService: NgbModal, private connexionService:ConnexionService){
  }

  public inscription() {
    let m:Membre = new Membre();
    m.mail=this.tmpMail;
    m.mot_de_passe=this.tmpPassword;
    m.prenom=this.tmpPrenom;
    m.nom=this.tmpNom;

    this.connexionService.createMembre(m).subscribe();
    this.reset();
    this.modalRef.close();
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

  private reset(){
    this.tmpNom="";
    this.tmpPrenom="";
    this.tmpPassword="";
    this.tmpConfirmPassword="";
    this.tmpMail="";
  }
}

