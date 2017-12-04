import {Component, Input, OnInit} from '@angular/core';
import {Musique} from '../models/musique';
import {MusiqueService} from '../service/service-musique.service';
import {AchatService} from '../service/achat.service';
import {Achat} from '../models/achat';
import {SingletonMembreService} from '../service/singleton-membre.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  private listeMusique: Musique[] = [];
  private listeMusiquePossede: Musique[] = [];
  @Input() searchFilter = '';

  constructor(public musiqueService: MusiqueService, public achatService: AchatService, public singletonMembreService: SingletonMembreService) { }

  ngOnInit() {
    this.musiqueService.getAllMusique().subscribe(listeMusique => {
      this.listeMusique = Musique.fromJSONs(listeMusique);

      if (this.singletonMembreService.isConnected){

        this.musiqueService.getMusiqueAchat(this.singletonMembreService.membre.mail, 1).subscribe( list => {
          this.listeMusiquePossede = Musique.fromJSONs(list);

          for (let i = 0; i < this.listeMusiquePossede.length; i++){
            for (let j = 0; j < this.listeMusique.length; j++){
              if (this.listeMusiquePossede[i].id_musique == this.listeMusique[j].id_musique){
                this.listeMusique[j].achete = true;
              }
            }
          }

        });
      }
    });
  }

  public create(ind: number) {
    const id_musique: number = this.listeMusique[ind].id_musique;
    this.achatService.createAchat(new Achat(this.singletonMembre.membre.mail, id_musique, 0));
  }

  get singletonMembre(): SingletonMembreService {
    return this.singletonMembreService;
  }
}
