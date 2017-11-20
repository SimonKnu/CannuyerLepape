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
  private index = 0;

  constructor(public musiqueService: MusiqueService) { }

  ngOnInit() {
    this.musiqueService.getAllMusique().subscribe(listeMusique => {
      this.listeMusique = Musique.fromJSONs(listeMusique);
    });
  }

  public modifier(i: number) {
    this.index = i;
    this.id_musique = this.listeMusique[i].id_musique;
    this.auteur = this.listeMusique[i].auteur;
    this.titre = this.listeMusique[i].titre;
    this.style = this.listeMusique[i].style;
    this.url = this.listeMusique[i].url;
    this.prix = this.listeMusique[i].prix;
  }

  public supprimer() {
    const DELETE_TODO = () => this.listeMusique.splice(this.index, 1);
    const DISPLAY_ERROR = (error) => console.error(error);

    this.musiqueService.deleteMusique(this.id_musique).subscribe(DELETE_TODO, DISPLAY_ERROR);
    this.id_musique = 0;
    this.auteur = '';
    this.titre = '';
    this.style = '';
    this.url = '';
    this.prix = 0;
  }

  public modifierMusique() {
    this.musiqueService.updateMusique(this.listeMusique[this.index]).subscribe();
    this.id_musique = 0;
    this.auteur = '';
    this.titre = '';
    this.style = '';
    this.url = '';
    this.prix = 0;
  }

}
