import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Achat} from '../models/achat';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AchatService {
  private _totalPanier:number=0;

  constructor(public http: HttpClient) { }

  public createAchat(achat: Achat): Observable<Achat> {
    return this.http.post('http://localhost:61812/api/achat', achat.getCleanDataForSending());
  }

  public deleteAchat(id_musique:number,mail:string){
    return this.http.delete('http://localhost:61812/api/achat?id_musique='+id_musique+"&mail="+mail);
  }


  get totalPanier(): number {
    return this._totalPanier;
  }

  set totalPanier(value: number) {
    this._totalPanier = value;
  }
}
