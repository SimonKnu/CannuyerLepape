import { Component, OnInit } from '@angular/core';
import {SingletonMembreService} from "../../service/singleton-membre.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private _singletonMembre:SingletonMembreService) { }


  ngOnInit() {
  }


  get singletonMembre(): SingletonMembreService {
    return this._singletonMembre;
  }
}
