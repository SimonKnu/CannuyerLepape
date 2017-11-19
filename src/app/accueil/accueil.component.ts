import { Component, OnInit } from '@angular/core';
import {Musique} from '../models/musique';
import {MusiqueService} from '../service/service-musique.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  private listeMusique: Musique[] = [];

  constructor(public musiqueService: MusiqueService) { }

  ngOnInit() {
    this.musiqueService.getAllMusique().subscribe(listeMusique => {
      this.listeMusique = Musique.fromJSONs(listeMusique);
    });
  }
}
