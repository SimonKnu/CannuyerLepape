import {Component, ViewEncapsulation} from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {SingletonMembreService} from "../../../service/singleton-membre.service";
import {ConnexionService} from "../../../service/service-connexion.service";

@Component({
  selector: 'app-modal-credit',
  templateUrl: './modal-credit.component.html',
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
export class ModalCreditComponent {
  closeResult: string;
  private modalRef:NgbModalRef;
  private soldeactuel:number = this.membreConnecter.membre.argent;
  private _solde:number= 0;
  private newsolde:number = this.soldeactuel + this._solde;
  private tropArgent:boolean= false;

  constructor(private modalService: NgbModal,private _membreConnecter: SingletonMembreService, private connexion:ConnexionService) {}

  get solde(): number {
    return this._solde;
  }
  set solde(value: number) {
    this._solde = value;
    this.newsolde = this.membreConnecter.membre.argent + this._solde;
    if(this.newsolde>10000){
      this.tropArgent=true;
    }
    else {
      this.tropArgent=false;
    }
  }



  get membreConnecter(): SingletonMembreService {
    return this._membreConnecter;
  }

  public ajouterSolde() {
    this._membreConnecter.membre.argent = this.newsolde;
    this.soldeactuel = this.newsolde;
    this._solde = 0;
    this.connexion.updateArgent(this.membreConnecter.membre.mail, this.membreConnecter.membre.argent).subscribe(val =>{
      if(val==="OK"){
        localStorage.setItem("argent",this.membreConnecter.membre.argent+"");
        alert("Votre argent a bien été ajouté à votre portefeuille");
      }
      else {
        alert("Une erreur est survenue ! Veuillez réessayer");
      }
      this.modalRef.close();
    });
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
