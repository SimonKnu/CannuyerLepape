import { Component, OnInit } from '@angular/core';
import {MusiqueService} from '../service/service-musique.service';
import {Musique} from '../models/musique';

@Component({
  selector: 'app-mesmusiques',
  templateUrl: './mesmusiques.component.html',
  styleUrls: ['./mesmusiques.component.css']
})
export class MesmusiquesComponent implements OnInit {
  private listeMusique: Musique[] = [];

  constructor(public musiqueService: MusiqueService) { }

  ngOnInit() {
    this.musiqueService.getAllMusique().subscribe(listeMusique => {
      this.listeMusique = Musique.fromJSONs(listeMusique);
    });
  }

}
