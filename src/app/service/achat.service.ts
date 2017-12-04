import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Achat} from '../models/achat';
import {Observable} from 'rxjs/Observable';
import {Musique} from "../models/musique";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class AchatService {

  private _nbPanier:number=0
  private _prixPanier:number=0;
  private _listeMusiqueAchete: Musique[] = [];


  constructor(public http: HttpClient) { }

  public createAchat(achat: Achat) {
    this.http.get('http://localhost:61812/api/achat?mail='+achat.mail+"&id_musique="+achat.id_musique).subscribe(val => {
      if(val===null){
        alert("Musique ajoutée au panier");
        this.http.post('http://localhost:61812/api/achat', achat.getCleanDataForSending()).subscribe();
        this.nbPanier++;
        localStorage.setItem("nbPanier",this._nbPanier+"");
      }
    });
  }

  public deleteAchat(id_musique:number,mail:string){
    this.nbPanier--;
    localStorage.setItem("nbPanier",this._nbPanier+"");
    return this.http.delete('http://localhost:61812/api/achat?id_musique='+id_musique+"&mail="+mail);
  }

  public updateAchat(achats:Achat[]): Observable<string>{
    for(let i:number=1; i<achats.length;i++) {
      this.http.put('http://localhost:61812/api/achat', achats[i].getCleanDataForSending()).subscribe();
    }
    return this.http.put('http://localhost:61812/api/achat', achats[0].getCleanDataForSending());
  }

  public reset(){
    this.nbPanier=0;
    localStorage.setItem("nbPanier",this._nbPanier+"");
  }

  get nbPanier(): number {
    let val:number = parseInt(localStorage.getItem("nbPanier"));
    if(isNaN(val)){
      return 0;
    }
    return val;
  }
  set nbPanier(value: number) {
    this._nbPanier = value;
  }


  get prixPanier(): number {
    return this._prixPanier;
  }
  set prixPanier(value: number) {
    this._prixPanier = value;
  }


  get listeMusiqueAchete(): Musique[] {
    return this._listeMusiqueAchete;
  }
  set listeMusiqueAchete(value: Musique[]) {
    this._listeMusiqueAchete = value;
  }
}
