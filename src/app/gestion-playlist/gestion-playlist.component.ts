import { Component, OnInit } from '@angular/core';
import {PlaylistService} from '../service/service-playlist.service';
import {Playlist} from '../models/playlist';
import {Musique} from '../models/musique';
import {MusiqueService} from '../service/service-musique.service';
import {SingletonMembreService} from '../service/singleton-membre.service';
import {PlaylistmusiqueService} from '../service/playlistmusique.service';
import {Playlistmusique} from '../models/playlistmusique';

@Component({
  selector: 'app-gestion-playlist',
  templateUrl: './gestion-playlist.component.html',
  styleUrls: ['./gestion-playlist.component.css']
})
export class GestionPlaylistComponent implements OnInit {
  private listePlaylist: Playlist[] = [];
  private listeMusique: Musique[] = [];
  private listAdd: Musique[] = [];
  private listeTmp: Musique[] = [];
  private nomPlaylist = '';
  private id_playlist = 0;
  private isCollapsed = true;
  private estCache = true;
  private nom = '';
  private index= 0;

  constructor(public playlistService: PlaylistService, public musiqueService: MusiqueService,
              public playlistmusiqueService: PlaylistmusiqueService, private _membreConnecter: SingletonMembreService) { }

  ngOnInit() {
    this.playlistService.getPlaylist(this._membreConnecter.membre.mail).subscribe(listePlaylist => {
      this.listePlaylist = Playlist.fromJSONs(listePlaylist);
    });

    this.musiqueService.getMusiqueAchat(this._membreConnecter.membre.mail, 1).subscribe(listeMusique => {
      this.listAdd = Musique.fromJSONs(listeMusique);
    });
  }

  public updateList(playlist: Playlist, index: number) {

    this.index = index;
    this.nomPlaylist = playlist.nom;
    this.id_playlist = playlist.id_playlist;
    this.musiqueService.getMusique(this.id_playlist).subscribe(listeMusique => {
      this.listeMusique = Musique.fromJSONs(listeMusique);

      this.listeTmp = [];
      let tmp = 0;
      for (let i = 0; i < this.listAdd.length; i++){
        for (let j = 0; j < this.listeMusique.length; j++){
          if (this.listAdd[i].id_musique == this.listeMusique[j].id_musique) {
            tmp = 1;
          }
        }
        if (tmp == 0) {
          this.listeTmp.push(this.listAdd[i]);
        }else{
          tmp = 0;
        }
      }
    });
  }

  public createPlaylist() {
    this.playlistService.createPlaylist(new Playlist(0, this.nom, this._membreConnecter.membre.mail))
      .subscribe(playlist => this.listePlaylist.push(Playlist.fromJSON(playlist)));
    this.isCollapsed = true;
    this.nom = '';
  }

  public delete(id_musique: number, index: number) {
    this.listeTmp.push(this.listeMusique[index]);

    const DELETE = () => this.listeMusique.splice(index, 1);
    const DISPLAY_ERROR = (error) => console.error(error);

    this.playlistmusiqueService.deleteMusique(id_musique, this.id_playlist).subscribe(DELETE, DISPLAY_ERROR);
  }

  public createPlaylistMusique(musique: Musique, index: number) {
    this.listeTmp.splice(index, 1);
    this.listeMusique.push(musique);
    this.playlistmusiqueService.createPlaylistMusique(new Playlistmusique(musique.id_musique, this.id_playlist)).subscribe();
    this.estCache = true;
  }

  public deleteMusique() {
    const DELETE = () => this.listePlaylist.splice(this.index, 1);
    const DISPLAY_ERROR = (error) => console.error(error);

    this.playlistService.deletePlaylist(this.id_playlist, this._membreConnecter.membre.mail).subscribe(DELETE, DISPLAY_ERROR);
    this.nomPlaylist = '';
    this.listeMusique = [];
  }
}
