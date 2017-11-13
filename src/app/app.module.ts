import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { IndexComponent } from './index/index.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


//Permets de créer notre routings pour naviguer de page en page
const routes : Routes = [
  {path:"index",component:IndexComponent},
  {path:"account",component:AccountComponent},
  {path:"",redirectTo:"/index",pathMatch:"full"},
];



@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    IndexComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
