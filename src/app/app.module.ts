import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UserspageComponent } from './pages/userspage/userspage.component';
import { RepospageComponent } from './pages/repospage/repospage.component';
//http
import { HttpClientModule } from "@angular/common/http";

//routes
import { FeatureRoutingModule } from "./app.routes";
import { NoimagePipe } from './pipes/noimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserspageComponent,
    RepospageComponent,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FeatureRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
