import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LaremProjectComponent } from './larem-project/larem-project.component';
import { LvcProjectComponent } from './lvc-project/lvc-project.component';
import { SeniorDesignProjectComponent } from './senior-design-project/senior-design-project.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    LaremProjectComponent,
    LvcProjectComponent,
    SeniorDesignProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
