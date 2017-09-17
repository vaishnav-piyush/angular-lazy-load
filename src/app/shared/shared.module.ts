import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { HeaderModule } from "app/header/header.module";

@NgModule({
    declarations : [
       
    ],
    imports : [
        CommonModule, 
    ],
    exports : [
     
    ],
    providers : []
})

export class SharedModule{}