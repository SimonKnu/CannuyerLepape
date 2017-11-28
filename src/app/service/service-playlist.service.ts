import { Injectable } from '@angular/core';
import {Playlist} from '../models/playlist';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PlaylistService {

  constructor(public http: HttpClient) { }

  public getPlaylist(mail: string): Observable<Playlist[]> {
    return this.http.get('http://localhost:61812/api/playlist?mail=' + mail);
  }

  public createPlaylist(playlist: Playlist): Observable<Playlist> {
    return this.http.post('http://localhost:61812/api/playlist', playlist.getCleanDataForSending());
  }

  public updatePlaylist(playlist: Playlist): Observable<any> {
    return this.http.put('http://localhost:61812/api/playlist', playlist.getCleanDataForSendingUpdate());
  }

  public deletePlaylist(id_playlist: number, mail: string): Observable<any> {
    return this.http.delete<string>('http://localhost:61812/api/playlist?id_playlist=' + id_playlist + '&mail=' + mail);
  }
}
