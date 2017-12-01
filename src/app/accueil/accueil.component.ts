import { Component, OnInit } from '@angular/core';
import {Musique} from '../models/musique';
import {MusiqueService} from '../service/service-musique.service';
import {AchatService} from "../service/achat.service";
import {Achat} from "../models/achat";
import {SingletonMembreService} from "../service/singleton-membre.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  private listeMusique: Musique[] = [];

  constructor(public musiqueService: MusiqueService, public achatService: AchatService,
              public singletonMembreService: SingletonMembreService) { }

  ngOnInit() {
    this.musiqueService.getAllMusique().subscribe(listeMusique => {
      this.listeMusique = Musique.fromJSONs(listeMusique);
    });
  }

  public create(id_musique: number) {
    this.achatService.createAchat(new Achat(this.singletonMembre.membre.mail,  id_musique, 0)).subscribe();
  }

  get singletonMembre(): SingletonMembreService {
    return this.singletonMembreService;
  }
}
