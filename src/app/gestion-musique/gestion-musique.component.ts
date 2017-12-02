import { Component, OnInit } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import {Musique} from '../models/musique';
import {MusiqueService} from '../service/service-musique.service';

@Component({
  selector: 'app-gestion-musique',
  templateUrl: './gestion-musique.component.html',
  styleUrls: ['./gestion-musique.component.css'],
  providers: [NgbAccordionConfig]
})
export class GestionMusiqueComponent implements OnInit {
  private listeMusique: Musique[] = [];
  private auteur = '';
  private titre = '';
  private style = '';
  private url = '';
  private image = '';
  private id_musique: number;
  private prix: number;
  private index = 0;

  constructor(config: NgbAccordionConfig, public musiqueService: MusiqueService) {
    config.closeOthers = true;
    config.type = 'info';
  }

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
    this.image = this.listeMusique[i].image;
    this.prix = this.listeMusique[i].prix;
  }

  public modifierMusique() {
    const m = new Musique(this.id_musique, this.auteur, this.titre, this.style, this.url, this.image, this.prix);
    this.listeMusique[this.index] = m;
    this.musiqueService.updateMusique(m).subscribe();
    this.id_musique = 0;
    this.auteur = '';
    this.titre = '';
    this.style = '';
    this.image = '';
    this.url = '';
    this.prix = 0;
  }

  public createMusique() {
    this.musiqueService.createMusique(new Musique(0, this.auteur, this.titre,  this.style, this.url, this.image,  this.prix))
      .subscribe(musique =>  this.listeMusique.push(Musique.fromJSON(musique)));
    this.auteur = '';
    this.titre = '';
    this.style = '';
    this.url = '';
    this.image = '';
    this.prix = 0;
  }
}
