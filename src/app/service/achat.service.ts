import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Achat} from '../models/achat';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AchatService {

  constructor(public http: HttpClient) { }

  public createAchat(achat: Achat): Observable<Achat> {
    return this.http.post('http://localhost:61812/api/achat', achat.getCleanDataForSending());
  }
}
