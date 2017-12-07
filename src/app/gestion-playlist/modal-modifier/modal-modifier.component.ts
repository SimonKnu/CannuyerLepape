import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {PlaylistService} from '../../service/service-playlist.service';
import {Playlist} from '../../models/playlist';

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
  `]
})
export class ModalModifierComponent implements OnInit {
  closeResult: string;
  private modalRef: NgbModalRef;

  private nom = '';
  private playlist: Playlist;

  constructor(private modalService: NgbModal, public playlistService: PlaylistService) { }

  ngOnInit() {
  }

  public modifier() {
    this.playlist = this.playlistService.get();
    this.playlist.nom = this.nom;
    this.playlistService.updatePlaylist(this.playlist).subscribe(val => {
      this.modalRef.close();
    });
  }

  open(content) {
    this.modalRef = this.modalService.open(content,  {windowClass: 'milieu-ecran'});
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
