import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const appRoutings : Routes = [    
    { path : 'home', component : HomeComponent },
    { path : 'about', component: AboutComponent },
    { path : 'dashboard', component : DashboardComponent }
]

export const AppRoutes:ModuleWithProviders = RouterModule.forChild(appRoutings);

// @NgModule(
//   {
//     imports: [RouterModule.forRoot([      
//       { path : '', component : DashboardComponent }, 
//       { path : 'home', component : HomeComponent }, 
//       { path : 'about', component: AboutComponent },
//        { path : 'users', loadChildren : 'app/users/users.module#UserModule' }
//     ])]
//   }
// )
// export class AppRoutes {

// }

