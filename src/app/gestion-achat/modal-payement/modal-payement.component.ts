import {Component, OnInit, ViewEncapsulation,} from '@angular/core';
import {ModalService} from "../../service/modal-service.service";
import {Router} from "@angular/router";
import {SingletonMembreService} from "../../service/singleton-membre.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AchatService} from "../../service/achat.service";
import {Achat} from "../../models/achat";
import {ConnexionService} from "../../service/service-connexion.service";

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

  constructor(private refModal: ModalService, private serviceConnexion:ConnexionService, private _achatService:AchatService, private router:Router, private _singletonMembre:SingletonMembreService) {}

  public fermer(){
    this.refModal.modalPayement.close();
  }

  public validerPayement(){
    if(this._singletonMembre.membre.argent >= this._achatService.prixPanier){

      let achats:Achat[] = [];
      for(let i:number=0 ; i<this._achatService.listeMusiqueAchete.length ; i++){
        achats.push(new Achat(this._singletonMembre.membre.mail,this._achatService.listeMusiqueAchete[i].id_musique,1))
      }

      this._achatService.updateAchat(achats).subscribe(val => {
        if(val === "OK"){
          this._singletonMembre.membre.argent-=this._achatService.prixPanier;
          this.fermer();
          this._achatService.reset();
          this.serviceConnexion.updateArgent(this._singletonMembre.membre.mail, this._singletonMembre.membre.argent).subscribe(val =>{
            localStorage.setItem("argent",this._singletonMembre.membre.argent+"");
            this.router.navigate([""]);
            alert("Payement effectué avec succès ! Retrouvez vos musiques dans l'onglet 'Mes musiques'");
          });
        }
      });
    }
    else {
      alert("Vous n'avez pas assez d'argent sur votre compte ! Rechargez votre porte monnaie pour continuer la transaction");
    }
  }


  get achatService(): AchatService {
    return this._achatService;
  }
  get singletonMembre(): SingletonMembreService {
    return this._singletonMembre;
  }
}
