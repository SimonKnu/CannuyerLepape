import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {HttpParams} from "@angular/common/http";

@Injectable()
export class ServiceConnexionService {

  constructor(public http:Http) { }

  public getConnexion(email:string, mot_de_passe:string):Observable<any>{
    return this.http.get("http://localhost:61812/api/membre",{
      params:new HttpParams()
        .set("mail",email)
        .set("password",mot_de_passe)
        .toString()
    });
  }
}
