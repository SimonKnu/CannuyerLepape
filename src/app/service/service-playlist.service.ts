import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Playlist} from "../models/playlist";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ServicePlaylistService {

  constructor(public http: Http) { }

  public createMusique(playlist: Playlist): Observable<Playlist> {
    return this.http.post('http://localhost:61812/api/playlist', playlist.getCleanDataForSending()).map(response => response.json());
  }

  public updateMusique(playlist: Playlist): Observable<any> {
    return this.http.put('http://localhost:61812/api/playlist', playlist.getCleanDataForSendingUpdate());
  }
}
