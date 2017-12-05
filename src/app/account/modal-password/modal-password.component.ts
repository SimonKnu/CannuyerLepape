import {Component, ViewEncapsulation} from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {SingletonMembreService} from "../../service/singleton-membre.service";
import {ConnexionService} from "../../service/service-connexion.service";

@Component({
  selector: 'app-modal-password',
  templateUrl: './modal-password.component.html',
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
export class ModalPasswordComponent {
  closeResult: string;
  private modalRef:NgbModalRef;

  private tmpPassword:string="";
  private tmpOldPassword:string="";
  private tmpConfirmPassword:string="";

  private _pasCorrect:boolean=false;

  constructor(private modalService: NgbModal, private _membreConnecter:SingletonMembreService, private connexion:ConnexionService)  {}

  get membreConnecter(): SingletonMembreService {
    return this._membreConnecter;
  }

  get pasCorrect(): boolean {
    return this._pasCorrect;
  }
  set pasCorrect(value: boolean) {
    this._pasCorrect = value;
  }

  public changerPassword(){
      this.pasCorrect = false;
      let mdp:string = this.tmpPassword;

      this.connexion.updatePassword(this.membreConnecter.membre.mail + "", mdp + "", this.tmpOldPassword+"").subscribe(test => {
        console.log(test);
        if (test === "OK") {
          this.membreConnecter.membre.mot_de_passe = this.tmpPassword;
          this.connexion.getConnexion(this.membreConnecter.membre.mail + "", mdp + "").subscribe(token => {
            if (token === "error" || token === "") {
            }
            else {
              localStorage.setItem("token", token);
              this.pasCorrect= false;
              this.tmpOldPassword="";
              this.tmpConfirmPassword="";
              this.tmpPassword="";
              this.modalRef.close();
              alert("Votre mot de passe a bien été modifié !")
            }
          })
        }
        else {
          this.pasCorrect  = true;
        }
      })
    }

  open(content) {
    this.modalRef = this.modalService.open(content,  {windowClass:'milieu-ecran'});
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
