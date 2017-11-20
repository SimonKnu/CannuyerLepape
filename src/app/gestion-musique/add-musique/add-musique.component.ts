import { Component, OnInit } from '@angular/core';
import {Musique} from '../../models/musique';
import {MusiqueService} from '../../service/service-musique.service';

@Component({
  selector: 'app-add-musique',
  templateUrl: './add-musique.component.html',
  styleUrls: ['./add-musique.component.css']
})
export class AddMusiqueComponent implements OnInit {
  private auteur = '';
  private titre = '';
  private style = '';
  private url = '';
  private prix = 0;

  constructor(public musiqueService: MusiqueService) { }

  ngOnInit() {
  }

  public createMusique() {
    const tmpMusique = new Musique(0, this.auteur, this.titre,  this.style,  this.url,  this.prix);
    this.musiqueService.createMusique(tmpMusique).subscribe(musique=> tmpMusique.id_musique = Musique.fromJSON(musique).id_musique);
    this.auteur = '';
    this.titre = '';
    this.style = '';
    this.url = '';
    this.prix = 0;
  }
}
