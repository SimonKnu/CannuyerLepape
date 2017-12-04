import { Component, OnInit } from '@angular/core';
import {MusiqueService} from '../service/service-musique.service';
import {Musique} from '../models/musique';
import {SingletonMembreService} from "../service/singleton-membre.service";

@Component({
  selector: 'app-mesmusiques',
  templateUrl: './mesmusiques.component.html',
  styleUrls: ['./mesmusiques.component.css']
})
export class MesmusiquesComponent implements OnInit {
  private listeMusiqueAchete: Musique[] = [];

  constructor(public musiqueService: MusiqueService, private singletonMembre:SingletonMembreService) { }

  ngOnInit() {
    this.musiqueService.getMusiqueAchat(this.singletonMembre.membre.mail,1).subscribe(listeMusique => {
      this.listeMusiqueAchete = Musique.fromJSONs(listeMusique);
    });
  }

}
