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
import { MesmusiquesComponent } from './mesmusiques/mesmusiques.component';
import { PanierComponent } from './panier/panier.component';

import {ConnexionService} from './service/service-connexion.service';
import {PlaylistService} from './service/service-playlist.service';
import {MusiqueService} from './service/service-musique.service';
import {SingletonMembreService} from './service/singleton-membre.service';
import {PlaylistmusiqueService} from './service/playlistmusique.service';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {UrlSafePipe } from './pipe/url-safe.pipe';
import { ModalLogInComponent } from './accueil/nav-bar/modal-log-in/modal-log-in.component';
import { ModalSignUpComponent } from './accueil/nav-bar/modal-sign-up/modal-sign-up.component';


//Permets de créer notre routings pour naviguer de page en page
const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'gestionAccount', component: AccountComponent},
  {path: 'gestionMusique', component: GestionMusiqueComponent},
  {path: 'gestionPlaylist', component: GestionPlaylistComponent},
  {path: 'mesmusiques', component: MesmusiquesComponent},
  {path: 'panier', component: PanierComponent},
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

    UrlSafePipe,

    ModalLogInComponent,
    ModalSignUpComponent,
    ModalPasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [ConnexionService, PlaylistService, MusiqueService, PlaylistmusiqueService, SingletonMembreService],
  bootstrap: [AppComponent]
})
export class AppModule {}
