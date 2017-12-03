import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Musique} from "../../models/musique";
import {MusiqueService} from "../../service/service-musique.service";
import {SingletonMembreService} from "../../service/singleton-membre.service";
import {AchatService} from "../../service/achat.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  private listeMusiquePanier: Musique[] = [];

  constructor(private musiqueService:MusiqueService, private singletonMembre:SingletonMembreService, private  serviceAchat : AchatService, private router:Router) { }

  ngOnInit() {
    this.musiqueService.getMusiqueAchat(this.singletonMembre.membre.mail,0).subscribe(listeMusique => {
      this.listeMusiquePanier = Musique.fromJSONs(listeMusique);
    });
  }

  public getTotal(){
    let somme:number=0;
    for(let i : number = 0; i < this.listeMusiquePanier.length ;i++){
      somme+=this.listeMusiquePanier[i].prix;
    }
    return somme;
  }

  public deleteItem(i:number) {
    this.serviceAchat.deleteAchat(this.listeMusiquePanier[i].id_musique,this.singletonMembre.membre.mail).subscribe();
    this.listeMusiquePanier.splice(i,1);
  }
}
