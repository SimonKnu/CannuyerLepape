import { Injectable } from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ModalLogInComponent} from "../accueil/nav-bar/modal-log-in/modal-log-in.component";

@Injectable()
export class ModalService {

  constructor() { }

  private _modalPayement:NgbModalRef;
  private _modalLogin:NgbModalRef;
  private _modalMail:NgbModalRef;


  get modalPayement(): NgbModalRef {
    return this._modalPayement;
  }
  set modalPayement(value: NgbModalRef) {
    this._modalPayement = value;
  }


  get modalLogin(): NgbModalRef {
    return this._modalLogin;
  }
  set modalLogin(value: NgbModalRef) {
    if(this._modalLogin){
      this._modalLogin.close();
    }
    this._modalLogin = value;
  }


  get modalMail(): NgbModalRef {
    return this._modalMail;
  }
  set modalMail(value: NgbModalRef) {
    this._modalMail = value;
  }
}
