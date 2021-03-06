import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Musique} from '../models/musique';
import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";

@Injectable()

export class MusiqueService {

  constructor(public http: HttpClient) { }

  public getAllMusique(): Observable<Musique[]> {
    return this.http.get('http://localhost:61812/api/musique');
  }
  public getMusiqueAchat(mail:string, statut:number): Observable<Musique[]> {
    return this.http.get('http://localhost:61812/api/musique?mail='+mail+"&statut="+statut);
  }

  public getMusique(id_playlist: number): Observable<Musique[]> {
    return this.http.get('http://localhost:61812/api/musique?id_playlist=' + id_playlist);
  }

  public createMusique(musique: Musique): Observable<Musique> {
    return this.http.post('http://localhost:61812/api/musique', musique.getCleanDataForSending());
  }

  public updateMusique(musique: Musique): Observable<any> {
    return this.http.put('http://localhost:61812/api/musique', musique.getCleanDataForSendingUpdate());
  }
}
