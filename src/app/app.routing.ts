import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "app/login/login.component";


const appRoutings : Routes = [    
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path : 'dashboard', loadChildren : 'app/header/header.module#HeaderModule' },
    { path : 'users', loadChildren : 'app/users/users.module#UserModule' },
    { path: 'login', component: LoginComponent}
]

export const AppRoutes:ModuleWithProviders = RouterModule.forRoot(appRoutings);
