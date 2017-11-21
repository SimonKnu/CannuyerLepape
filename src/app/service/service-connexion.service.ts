import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";
import {Membre} from "../models/membre";

@Injectable()
export class ServiceConnexionService {

  constructor(public http:Http, private router:Router) { }

  public getConnexion(pseudo:string, mot_de_passe:string):Observable<string>{
    return this.http.get("http://localhost:61812/api/token",{
      params:new HttpParams().set("pseudo",pseudo).set("password",mot_de_passe).toString()
    }).map(res=>res.json());
  }

  public getMembre(pseudo:string):Observable<Membre>{
    return this.http.get("http://localhost:61812/api/Membre",{
      params:new HttpParams().set("pseudo_membre",pseudo).toString()
    }).map(res=>res.json());
  }
}
