import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PlaylistmusiqueService {

  constructor(public http: HttpClient) { }

  public deleteMusique(id_musqiue: number, id_playlist: number): Observable<any> {
    return this.http.delete('http://localhost:60950/api/playlistmusique?id_musique=' + id_musqiue + '&id_playlist=' + id_playlist);
  }
}
