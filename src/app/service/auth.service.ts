import { Injectable } from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor() { }

  public getToken(): string {
    if(this.isAuthenticated()){
      return localStorage.getItem('token');
    }
  }

  public isAuthenticated(): boolean {
    return tokenNotExpired('token');
  }


}
