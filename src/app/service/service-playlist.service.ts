import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Playlist} from '../models/playlist';
import {Observable} from 'rxjs/Observable';
import {HttpParams} from '@angular/common/http';

@Injectable()
export class PlaylistService {

  constructor(public http: Http) { }

  public getPlaylist(mail: string): Observable<Playlist[]> {
    return this.http.get('http://localhost:61812/api/playlist',  {
      params: new HttpParams().set('mail', mail + '').toString()
    }).map(response => response.json());
  }

  public createPlaylist(playlist: Playlist): Observable<Playlist> {
    return this.http.post('http://localhost:61812/api/playlist', playlist.getCleanDataForSending()).map(response => response.json());
  }

  public updatePlaylist(playlist: Playlist): Observable<any> {
    return this.http.put('http://localhost:61812/api/playlist', playlist.getCleanDataForSendingUpdate());
  }

  public deleteMusique(id_musqiue: number, id_playlist: number): Observable<any> {
    return this.http.delete('http://localhost:60950/api/playlistMusique',  );
  }
}
