import 'rxjs/add/operator/do';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {HttpErrorResponse} from "@angular/common/http";
import {Injectable, Injector} from "@angular/core";
import {SingletonMembreService} from "../service/singleton-membre.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalLogInComponent} from "../accueil/nav-bar/modal-log-in/modal-log-in.component";
import {ModalService} from "../service/modal-service.service";

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
          redirect.supprimerConnexion();


          const login = this.injector.get(NgbModal);
          const refModal = this.injector.get(ModalService);
          refModal.modalLogin = login.open(ModalLogInComponent, {windowClass: 'milieu-ecran'});
        }
      }
    });
  }
}
