import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Playlistmusique} from "../models/playlistmusique";

@Injectable()
export class PlaylistmusiqueService {

  constructor(public http: HttpClient) { }

  public deleteMusique(id_musqiue: number, id_playlist: number): Observable<any> {
    return this.http.delete('http://localhost:61812/api/playlistmusique?id_musique=' + id_musqiue + '&id_playlist=' + id_playlist);
  }

  public createPlaylistMusique(playlistmusique: Playlistmusique): Observable<Playlistmusique> {
    return this.http.post('http://localhost:61812/api/playlistmusique', playlistmusique.getCleanDataForSending());
  }
}
