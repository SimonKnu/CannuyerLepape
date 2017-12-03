import {Component, OnInit, ViewEncapsulation,} from '@angular/core';
import {ModalService} from "../../service/modal-service.service";

@Component({
  selector: 'app-modal-payement',
  templateUrl: './modal-payement.component.html',
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
export class ModalPayementComponent {
  constructor(private refModal: ModalService) {}

  public fermer(){
    this.refModal.modalPayement.close();
  }

}
