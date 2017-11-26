import { Component, OnInit } from '@angular/core';
import {SingletonMembreService} from "../service/singleton-membre.service";

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  private soldeactuel = this._membreConnecter.membre.argent;
  private solde = 0;

  constructor(private _membreConnecter: SingletonMembreService) { }

  ngOnInit() {
  }

  public ajouterSolde() {
    const tmp = this.solde + this.soldeactuel;
    this._membreConnecter.membre.argent = tmp;
    this.soldeactuel = tmp;
    this.solde = 0;
  }
}
