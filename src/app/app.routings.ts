import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const appRoutings : Routes = [
    { path : '', component : DashboardComponent },
    { path : 'home', component : HomeComponent },
    { path : 'about', component: AboutComponent },
    { path : 'users', 
      loadChildren : 'app/users/users.module#UserModule'  
    }
]

export const AppRoutes:ModuleWithProviders = RouterModule.forRoot(appRoutings);

