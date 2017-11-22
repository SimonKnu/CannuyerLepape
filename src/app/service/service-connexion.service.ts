import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";
import {Membre} from "../models/membre";

@Injectable()
export class ServiceConnexionService {

  constructor(public http:Http) { }

  public getConnexion(mail:string, mot_de_passe:string):Observable<string>{
    return this.http.get("http://localhost:61812/api/token",{
      params:new HttpParams().set("mail",mail).set("mot_de_passe",mot_de_passe).toString()
    }).map(res=>res.json());
  }

  public getMembre(mail:string):Observable<Membre>{
    return this.http.get("http://localhost:61812/api/Membre", {
      params:new HttpParams().set("mail",mail).toString()
    }).map(res=>res.json());
  }
}
