import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Musique} from '../models/musique';
import 'rxjs/add/operator/map';
import {HttpParams} from '@angular/common/http';
@Injectable()

export class MusiqueService {

  constructor(public http: Http) { }

  public getAllMusique(): Observable<Musique[]> {
    return this.http.get('http://localhost:61812/api/musique').map(response => response.json());
  }

  public createMusique(musique: Musique): Observable<Musique> {
    return this.http.post('http://localhost:61812/api/musique', musique.getCleanDataForSending()).map(response => response.json());
  }

  public deleteMusique(id_musique: number): Observable<any> {
    return this.http.delete('http://localhost:61812/api/musique', {
      params: new HttpParams().set('id_musique', id_musique + '').toString()
    });
  }

  public updateMusique(musique: Musique): Observable<any> {
    return this.http.put('http://localhost:61812/api/musique', musique.getCleanDataForSending(), {
      params: new HttpParams().set('id_musique', musique.id_musique + '').toString()
    });
  }
}
