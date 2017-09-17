import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HeaderModule } from '../header/header.module';
import { UsersRoutings } from "app/users/users.routings";

@NgModule({
    declarations : [
        UsersComponent,
        UserListComponent,
        UserDetailsComponent,
    ],
    imports : [
        CommonModule,
        HeaderModule,
        UsersRoutings
    ],
    providers : []
})

export class UserModule{}