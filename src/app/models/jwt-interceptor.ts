import 'rxjs/add/operator/do';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {HttpErrorResponse} from "@angular/common/http";
import {Injectable, Injector} from "@angular/core";
import {Router} from "@angular/router";
import {SingletonMembreService} from "../service/singleton-membre.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private injector:Injector){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse){
        if (err.status === 401) {
          const redirect = this.injector.get(SingletonMembreService);
          redirect.reconnexion();
        }
      }
    });
  }
}
