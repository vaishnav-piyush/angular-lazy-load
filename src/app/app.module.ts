import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from 'app/about/about.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { HeaderComponent } from 'app/header/header.component';
import { SharedModule } from 'app/shared/shared.module';
import { HeaderModule } from 'app/header/header.module';
import { RouterModule } from "@angular/router";
import { LoginComponent } from 'app/login/login.component';
import { AppRoutes } from "app/app.routing";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeaderModule, 
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
