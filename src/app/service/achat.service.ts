import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Achat} from '../models/achat';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AchatService {

  private _totalPanier:number=0;
  private _nbPanier:number=0


  constructor(public http: HttpClient) { }

  public createAchat(achat: Achat): Observable<Achat> {
    this.nbPanier++;
    localStorage.setItem("nbPanier",this._nbPanier+"");
    return this.http.post('http://localhost:61812/api/achat', achat.getCleanDataForSending());
  }

  public deleteAchat(id_musique:number,mail:string){
    this.nbPanier--;
    localStorage.setItem("nbPanier",this._nbPanier+"");
    return this.http.delete('http://localhost:61812/api/achat?id_musique='+id_musique+"&mail="+mail);
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
}
