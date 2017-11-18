import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";

@Injectable()
export class ServiceConnexionService {

  constructor(public http:Http, private router:Router) { }

  public getConnexion(email:string, mot_de_passe:string):Observable<string>{
    return this.http.get("http://localhost:61812/api/token",{
      params:new HttpParams().set("mail",email).set("password",mot_de_passe).toString()
    }).map(res=>res.json());
  }

  public goAccount(){
    this.router.navigate(["account"]);
  }
}
