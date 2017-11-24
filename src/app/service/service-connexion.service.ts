import {Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Membre} from "../models/membre";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class ConnexionService {

  constructor(public http:HttpClient) { }

  public getConnexion(mail:string, mot_de_passe:string):Observable<string>{
    return this.http.get<string>("http://localhost:61812/api/token?mail="+mail+"&mot_de_passe="+mot_de_passe);
  }

  public getMembre(mail:string):Observable<Membre>{
    let headers = new HttpHeaders().set('Authorization','Bearer ' + localStorage.getItem("tokenStorage"));
    return this.http.get("http://localhost:61812/api/Membre?mail="+mail,{headers:headers});
  }
}
