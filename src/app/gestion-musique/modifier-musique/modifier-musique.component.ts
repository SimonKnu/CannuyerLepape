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
  private prix = 0;

  constructor(public musiqueService: MusiqueService) { }

  ngOnInit() {

  }

  modifierMusique(){

  }

}
