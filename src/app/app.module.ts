import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './header/header.module';
import { RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';

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
    RouterModule.forRoot([
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path : 'dashboard', loadChildren : 'app/header/header.module#HeaderModule' },
      { path : 'users', loadChildren : 'app/users/users.module#UserModule' },
      { path: 'login', component: LoginComponent}
    ])
    // AppRoutes
    // HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
