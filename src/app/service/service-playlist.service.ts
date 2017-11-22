import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Playlist} from "../models/playlist";
import {Observable} from "rxjs/Observable";
import {HttpParams} from "@angular/common/http";

@Injectable()
export class ServicePlaylistService {

  constructor(public http: Http) { }

  public getPlaylist(mail: string): Observable<Playlist[]> {
    return this.http.get("http://localhost:61812/api/playlist").map(response => response.json(), {
      params:new HttpParams().set("mail",mail+"").toString()
    });
  }

  public createPlaylist(playlist: Playlist): Observable<Playlist> {
    return this.http.post('http://localhost:61812/api/playlist', playlist.getCleanDataForSending()).map(response => response.json());
  }

  public updatePlaylist(playlist: Playlist): Observable<any> {
    return this.http.put('http://localhost:61812/api/playlist', playlist.getCleanDataForSendingUpdate());
  }
}
