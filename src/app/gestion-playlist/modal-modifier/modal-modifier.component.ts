import {Component, ViewEncapsulation} from '@angular/core';
import {PlaylistService} from '../../service/service-playlist.service';
import {Playlist} from '../../models/playlist';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalService} from '../../service/modal-service.service';

@Component({
  selector: 'app-modal-modifier',
  templateUrl: './modal-modifier.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .milieu-ecran .modal-dialog{
      position: absolute;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
    }
  `],
})
export class ModalModifierComponent{
  private nom = '';
  private playlist: Playlist;

  constructor(private modalService: ModalService, public playlistService: PlaylistService) { }

  public modifier() {
    this.playlist = this.playlistService.get();
    this.playlist.nom = this.nom;
    this.playlistService.updatePlaylist(this.playlist).subscribe(val => {
      this.modalService.modalPlaylist.close();
    });
  }

  public fermer() {
    this.modalService.modalPlaylist.close();
  }
}
