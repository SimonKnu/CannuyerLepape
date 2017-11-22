import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MembreConnecterService} from "../service/membre-connecter.service";
import {Membre} from "../models/membre";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  constructor(private _membreConnecter:MembreConnecterService) {
  }

  ngOnInit() {
  }

  get membreConnecter(): MembreConnecterService {
    return this._membreConnecter;
  }
  set membreConnecter(value: MembreConnecterService) {
    this._membreConnecter = value;
  }
}
