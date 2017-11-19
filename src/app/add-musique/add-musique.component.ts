import { Component, OnInit } from '@angular/core';
import {Musique} from '../models/musique';
import {MusiqueService} from '../service/service-musique.service';

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
    this.musiqueService.createMusique(new Musique(0, this.auteur, this.titre,  this.style,  this.url,  this.prix));
    this.auteur = '';
    this.titre = '';
    this.style = '';
    this.url = '';
    this.prix = 0;
  }
}
