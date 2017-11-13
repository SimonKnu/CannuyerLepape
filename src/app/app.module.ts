import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalPasswordComponent } from './account/modal-password/modal-password.component';
import {AccueilComponent} from "./accueil/accueil.component";

//Permets de créer notre routings pour naviguer de page en page
const routes : Routes = [
  {path:"accueil",component:AccueilComponent},
  {path:"account",component:AccountComponent},
  {path:"",redirectTo:"/accueil",pathMatch:"full"},
];



@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccueilComponent,
    NavBarComponent,
    ModalPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
