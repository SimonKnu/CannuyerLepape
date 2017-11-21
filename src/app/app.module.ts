import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { NavBarComponent } from './accueil/nav-bar/nav-bar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalPasswordComponent } from './account/modal-password/modal-password.component';
import {AccueilComponent} from './accueil/accueil.component';
import { LogInComponent } from './log-in/log-in.component';
import {ServiceConnexionService} from './service/service-connexion.service';
import {MusiqueService} from './service/service-musique.service';
import {HttpModule} from '@angular/http';
import { UrlSafePipe } from './pipe/url-safe.pipe';
import { GestionMusiqueComponent } from './gestion-musique/gestion-musique.component';


//Permets de créer notre routings pour naviguer de page en page
const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'account', component: AccountComponent},
  {path: 'login', component: LogInComponent},
  {path: 'gestionMusique', component: GestionMusiqueComponent},
  //{path: '', redirectTo: 'accueil', pathMatch: 'full'},
];



@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccueilComponent,
    NavBarComponent,
    ModalPasswordComponent,
    LogInComponent,
    UrlSafePipe,
    GestionMusiqueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [ServiceConnexionService, MusiqueService],
  bootstrap: [AppComponent]
})
export class AppModule {}
