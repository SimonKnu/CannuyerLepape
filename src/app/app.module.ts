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

import {ConnexionService} from './service/service-connexion.service';
import {PlaylistService} from './service/service-playlist.service';
import {MusiqueService} from './service/service-musique.service';
import {SingletonMembreService} from "./service/singleton-membre.service";

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {UrlSafePipe } from './pipe/url-safe.pipe';
import { ModalLogInComponent } from './accueil/nav-bar/modal-log-in/modal-log-in.component';


//Permets de créer notre routings pour naviguer de page en page
const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'gestionAccount', component: AccountComponent},
  {path: 'gestionMusique', component: GestionMusiqueComponent},
  {path: 'gestionPlaylist', component: GestionPlaylistComponent},
  //{path: '', redirectTo: '', pathMatch: 'full'},
];



@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccueilComponent,
    NavBarComponent,
    ModalPasswordComponent,
    GestionMusiqueComponent,
    GestionPlaylistComponent,

    UrlSafePipe,

    ModalLogInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [ConnexionService, PlaylistService, MusiqueService ,SingletonMembreService],
  bootstrap: [AppComponent]
})
export class AppModule {}
