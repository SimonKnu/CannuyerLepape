import { Component, OnInit } from '@angular/core';
import {Musique} from '../../models/musique';
import {MusiqueService} from '../../service/service-musique.service';

@Component({
  selector: 'app-modifier-musique',
  templateUrl: './modifier-musique.component.html',
  styleUrls: ['./modifier-musique.component.css']
})
export class ModifierMusiqueComponent implements OnInit {
  private listeMusique: Musique[] = [];
  private auteur = '';
  private titre = '';
  private style = '';
  private url = '';
  private id_musique: number;
  private prix: number;

  constructor(public musiqueService: MusiqueService) { }

  ngOnInit() {
    this.musiqueService.getAllMusique().subscribe(listeMusique => {
      this.listeMusique = Musique.fromJSONs(listeMusique);
    });
  }

  modifierMusique() {}

  modifier(musique: Musique) {
    this.id_musique = musique.id_musique;
    this.auteur = musique.auteur;
    this.titre = musique.titre;
    this.style = musique.style;
    this.url = musique.url;
    this.prix = musique.prix;
  }

}
