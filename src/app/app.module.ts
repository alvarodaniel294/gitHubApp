import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UserspageComponent } from './pages/userspage/userspage.component';
import { RepospageComponent } from './pages/repospage/repospage.component';

//routes
import { FeatureRoutingModule } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserspageComponent,
    RepospageComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
