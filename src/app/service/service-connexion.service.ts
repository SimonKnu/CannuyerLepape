import {Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Membre} from "../models/membre";
import {HttpParams} from "@angular/common/http";

@Injectable()
export class ConnexionService {

  constructor(public http:Http) { }

  public getConnexion(mail:string, mot_de_passe:string):Observable<string>{
    return this.http.get("http://localhost:61812/api/token",{
      params:new HttpParams().set("mail",mail).set("mot_de_passe",mot_de_passe).toString()
    }).map(res=>res.json());
  }

  public getMembre(mail:string):Observable<Membre>{
    let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("tokenStorage")});
    let options = new RequestOptions({ headers: headers });
    return this.http.get("http://localhost:61812/api/Membre?mail="+mail,options).map(res=>res.json());
  }
}
