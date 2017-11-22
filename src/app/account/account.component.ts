import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MembreConnecterService} from "../service/membre-connecter.service";
import {Membre} from "../models/membre";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [MembreConnecterService]
})
export class AccountComponent implements OnInit {
  private tmpPseudo_membre:string="";
  private tmpNom: string="";
  private tmpPrenom: string="";
  private tmpMail: string="";
  private tmpTelephone: string="";
  private tmpDate_naissance: string="";
  private tmpPays: string="";
  private tmpVille: string="";
  private tmpRue: string="";
  private tmpCode_postal: number=0;
  private tmpArgent: number=0;
  private tmpDate_inscription: string="";
  private tmpAdministrateur: boolean=false;
  private tmpToken:string="";

  constructor(private _membreConnecter:MembreConnecterService) {

  }

  ngOnInit() {

  }

}
