import { Injectable } from '@angular/core';
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

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
    this._modalLogin = value;
  }
}
