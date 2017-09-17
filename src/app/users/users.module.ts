import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header.component';

import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../header/header.module';
import { AppRoutes } from "app/app.routings";
import { UsersRoutings } from "app/users/users.routings";

@NgModule({
    declarations : [
        UsersComponent,
        UserListComponent,
        UserDetailsComponent,
    ],
    imports : [
        CommonModule,
        SharedModule,
        UsersRoutings
    ],
    providers : []
})

export class UserModule{}