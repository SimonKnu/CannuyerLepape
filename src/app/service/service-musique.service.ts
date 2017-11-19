import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Musique} from '../models/musique';
import 'rxjs/add/operator/map';
@Injectable()

export class MusiqueService {

  constructor(public http: Http) { }

  public getAllMusique(): Observable<Musique[]> {
    return this.http.get('http://localhost:61812/api/musique').map(response => response.json());
  }

  public createMusique(musique: Musique): Observable<Musique> {
    return this.http.post('http://localhost:61812/api/musique', musique.getCleanDataForSending()).map(response => response.json());
  }
}