import { Injectable } from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ModalLogInComponent} from "../accueil/nav-bar/modal-log-in/modal-log-in.component";

@Injectable()
export class ModalService {

  constructor() { }

  private _modalPayement:NgbModalRef;
  private _modalLogin:NgbModalRef;


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
    console.log("SALUT c");
    if(this._modalLogin){
      this._modalLogin.close();
      console.log("SALUT DELTEE");
    }
    this._modalLogin = value;
  }
}
