import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutes } from './app.routings';
import { HeaderComponent } from './header/header.component';

import { SharedModule } from './shared/shared.module';

import { HeaderModule } from './header/header.module';
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // AboutComponent,
    // DashboardComponent,
    // HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule, 
    RouterModule.forRoot([
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path : 'dashboard', loadChildren : 'app/shared/shared.module#SharedModule' },
      { path : 'users', loadChildren : 'app/users/users.module#UserModule' }

    ])
    // AppRoutes
    // HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
