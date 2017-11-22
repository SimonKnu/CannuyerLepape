import { Component, OnInit } from '@angular/core';
import {PlaylistService} from '../service/service-playlist.service';
import {Playlist} from '../models/playlist';
import {Musique} from '../models/musique';
import {MusiqueService} from '../service/service-musique.service';

@Component({
  selector: 'app-gestion-playlist',
  templateUrl: './gestion-playlist.component.html',
  styleUrls: ['./gestion-playlist.component.css']
})
export class GestionPlaylistComponent implements OnInit {
  private listePlaylist: Playlist[] = [];
  private listeMusique: Musique[] = [];
  private nomPlaylist = '';
  private id_playlist = 0;

  constructor(public playlistService: PlaylistService, public musiqueService: MusiqueService) { }

  ngOnInit() {
    this.playlistService.getPlaylist('yo').subscribe(listePlaylist => {
      this.listePlaylist = Playlist.fromJSONs(listePlaylist);
    });
  }

  public updateList(playlist: Playlist) {
    this.nomPlaylist = playlist.nom;
    this.id_playlist = playlist.id_playlist;
    this.musiqueService.getMusique(playlist.id_playlist).subscribe(listeMusique => {
      this.listeMusique = Musique.fromJSONs(listeMusique);
    });
  }

  public createPlaylist() {
  }

  public delete(id_musique: number, index: number) {
    const DELETE_TODO = () => this.listeMusique.splice(index, 1);
    const DISPLAY_ERROR = (error) => console.error(error);

    this.playlistService.deleteMusique(id_musique, this.id_playlist).subscribe(DELETE_TODO, DISPLAY_ERROR);
  }
}
