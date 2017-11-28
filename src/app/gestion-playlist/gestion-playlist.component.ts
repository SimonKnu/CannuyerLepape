import { Component, OnInit } from '@angular/core';
import {PlaylistService} from '../service/service-playlist.service';
import {Playlist} from '../models/playlist';
import {Musique} from '../models/musique';
import {MusiqueService} from '../service/service-musique.service';
import {SingletonMembreService} from '../service/singleton-membre.service';
import {PlaylistmusiqueService} from '../service/playlistmusique.service';
import {Playlistmusique} from "../models/playlistmusique";

@Component({
  selector: 'app-gestion-playlist',
  templateUrl: './gestion-playlist.component.html',
  styleUrls: ['./gestion-playlist.component.css']
})
export class GestionPlaylistComponent implements OnInit {
  private listePlaylist: Playlist[] = [];
  private listeMusique: Musique[] = [];
  private listAdd: Musique[] = [];
  private nomPlaylist = '';
  private id_playlist = 0;
  private isCollapsed = true;
  private estCache = true;
  private nom = '';

  constructor(public playlistService: PlaylistService, public musiqueService: MusiqueService,
              public playlistmusiqueService: PlaylistmusiqueService, private _membreConnecter: SingletonMembreService) { }

  ngOnInit() {
    this.playlistService.getPlaylist(this._membreConnecter.membre.mail).subscribe(listePlaylist => {
      this.listePlaylist = Playlist.fromJSONs(listePlaylist);
    });

    this.musiqueService.getAllMusique().subscribe(listeMusique => {
      this.listAdd = Musique.fromJSONs(listeMusique);
    });
  }

  public updateList(playlist: Playlist) {
    this.nomPlaylist = playlist.nom;
    this.id_playlist = playlist.id_playlist;
    this.musiqueService.getMusique(this.id_playlist).subscribe(listeMusique => {
      this.listeMusique = Musique.fromJSONs(listeMusique);
    });
  }

  public createPlaylist() {
    const tmpPlaylist = new Playlist(0, this.nom, this._membreConnecter.membre.mail);
    this.listePlaylist.push(tmpPlaylist);
    this.playlistService.createPlaylist(tmpPlaylist)
      .subscribe(playlist => tmpPlaylist.id_playlist = Playlist.fromJSON(playlist).id_playlist);
    this.isCollapsed = true;
    this.nom = '';
  }

  public delete(id_musique: number, index: number) {
    const DELETE_TODO = () => this.listeMusique.splice(index, 1);
    const DISPLAY_ERROR = (error) => console.error(error);

    this.playlistmusiqueService.deleteMusique(id_musique, this.id_playlist).subscribe(DELETE_TODO, DISPLAY_ERROR);
  }

  public createPlaylistMusique(musique: Musique) {
    if (-1 == this.listeMusique.indexOf(musique)) {
      this.listeMusique.push(musique);
      this.playlistmusiqueService.createPlaylistMusique(new Playlistmusique(musique.id_musique, this.id_playlist)).subscribe();
    }
    this.estCache = true;
  }
}
