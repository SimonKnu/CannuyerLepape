import { Component, OnInit } from '@angular/core';
import {PlaylistService} from '../service/service-playlist.service';
import {Playlist} from '../models/playlist';
import {Musique} from '../models/musique';
import {MusiqueService} from "../service/service-musique.service";

@Component({
  selector: 'app-gestion-playlist',
  templateUrl: './gestion-playlist.component.html',
  styleUrls: ['./gestion-playlist.component.css']
})
export class GestionPlaylistComponent implements OnInit {
  private listePlaylist: Playlist[] = [];
  private listeMusique: Musique[] = [];

  constructor(public playlistService: PlaylistService, public musiqueService: MusiqueService) { }

  ngOnInit() {
    this.playlistService.getPlaylist('yo').subscribe(listePlaylist => {
      this.listePlaylist = Playlist.fromJSONs(listePlaylist);
    });
  }

  public updateList(id_playlist: number) {
    this.musiqueService.getMusique(id_playlist).subscribe(listeMusique => {
      this.listeMusique = Musique.fromJSONs(listeMusique);
    });
  }

  public createPlaylist() {
  }
}
