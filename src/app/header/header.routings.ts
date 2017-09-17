import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { AboutComponent } from 'app/about/about.component';
import { HomeComponent } from 'app/home/home.component';


const headerRoutings : Routes = [    
    { path : 'home', component : HomeComponent },
    { path : 'about', component: AboutComponent },
    { path : 'dashboard', component : DashboardComponent }
]

export const HeaderRoutes:ModuleWithProviders = RouterModule.forChild(headerRoutings);
