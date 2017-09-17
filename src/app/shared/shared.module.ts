import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { AppRoutes } from "app/app.routings";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations : [
      HeaderComponent,
      HomeComponent, 
      AboutComponent, 
      DashboardComponent, 
    ],
    imports : [
        CommonModule, 
        AppRoutes
    ],
    exports : [
       HeaderComponent,
       HomeComponent, 
       AboutComponent, 
       DashboardComponent,
       RouterModule       
    ],
    providers : []
})

export class SharedModule{}