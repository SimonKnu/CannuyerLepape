import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SingletonMembreService} from "../service/singleton-membre.service";
import {Membre} from "../models/membre";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  constructor(private _membreConnecter:SingletonMembreService) {
  }

  ngOnInit() {
  }

  get membreConnecter(): SingletonMembreService {
    return this._membreConnecter;
  }
  set membreConnecter(value: SingletonMembreService) {
    this._membreConnecter = value;
  }
}
