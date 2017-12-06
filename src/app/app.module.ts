import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent } from './app.component';
import {AccountComponent } from './account/account.component';
import {NavBarComponent } from './accueil/nav-bar/nav-bar.component';
import {ModalPasswordComponent } from './account/modal-password/modal-password.component';
import {AccueilComponent} from './accueil/accueil.component';
import {GestionMusiqueComponent } from './gestion-musique/gestion-musique.component';
import {GestionPlaylistComponent } from './gestion-playlist/gestion-playlist.component';
import {MesmusiquesComponent } from './mesmusiques/mesmusiques.component';
import {PanierComponent } from './gestion-achat/panier/panier.component';
import {ModalLogInComponent } from './accueil/nav-bar/modal-log-in/modal-log-in.component';
import {ModalSignUpComponent } from './accueil/nav-bar/modal-sign-up/modal-sign-up.component';

import {ConnexionService} from './service/service-connexion.service';
import {PlaylistService} from './service/service-playlist.service';
import {MusiqueService} from './service/service-musique.service';
import {SingletonMembreService} from './service/singleton-membre.service';
import {PlaylistmusiqueService} from './service/playlistmusique.service';
import {AchatService} from './service/achat.service';

import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {TokenInterceptor} from './models/token-interceptor';
import {AuthService} from './service/auth.service';
import {JwtInterceptor} from "./models/jwt-interceptor";
import {ImagePipe } from './pipe/image.pipe';
import {PreviewPipe } from './pipe/preview.pipe';
import {MusiquefullPipe } from './pipe/musiquefull.pipe';
import {ConfirmationComponent } from './gestion-achat/confirmation/confirmation.component';
import {EqualValidator } from './directive/equal-validator.directive';
import {ModalCreditComponent } from './accueil/nav-bar/modal-credit/modal-credit.component';
import {ModalPayementComponent } from './gestion-achat/modal-payement/modal-payement.component';
import {ModalService} from "./service/modal-service.service";
import { WaitComponent } from './accueil/wait/wait.component';
import { RechercherPipe } from './pipe/rechercher.pipe';
import { ModalMailComponent } from './accueil/nav-bar/modal-log-in/modal-mail/modal-mail.component';




//Permets de créer notre routings pour naviguer de page en page
const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'gestionAccount', component: AccountComponent},
  {path: 'gestionMusique', component: GestionMusiqueComponent},
  {path: 'gestionPlaylist', component: GestionPlaylistComponent},
  {path: 'mesmusiques', component: MesmusiquesComponent},
  {path: 'panier', component: PanierComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'logIn', component: ModalLogInComponent},
  {path: 'wait', component: WaitComponent},
  //{path: '', redirectTo: '', pathMatch: 'full'},
];



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavBarComponent,
    AccountComponent,
    GestionMusiqueComponent,
    GestionPlaylistComponent,
    MesmusiquesComponent,
    PanierComponent,
    ConfirmationComponent,

    ImagePipe,
    PreviewPipe,
    MusiquefullPipe,
    RechercherPipe,

    ModalLogInComponent,
    ModalSignUpComponent,
    ModalPasswordComponent,
    ModalCreditComponent,
    ModalMailComponent,
    ModalPayementComponent,

    EqualValidator,

    WaitComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [ConnexionService, PlaylistService, MusiqueService, PlaylistmusiqueService,
    SingletonMembreService, AchatService, AuthService, ModalService, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },{
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  entryComponents : [ModalPayementComponent, ModalLogInComponent, ModalMailComponent],
})
export class AppModule {}
