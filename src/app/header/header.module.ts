import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';

import { SharedModule } from '../shared/shared.module';
import { HeaderRoutes } from "app/header/header.routings";
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations : [
      HeaderComponent,
      HomeComponent, 
      AboutComponent, 
      DashboardComponent      
    ],
    imports : [
        CommonModule,
        HeaderRoutes
    ],
    exports : [ 
        HeaderComponent,
        HomeComponent, 
        AboutComponent, 
        DashboardComponent  
    ],
    providers : []
})

export class HeaderModule{}