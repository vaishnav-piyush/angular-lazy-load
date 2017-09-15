import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header.component';

import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import { UsersRoutings } from './users.routings';

import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
    declarations : [
        UsersComponent,
        UserListComponent,
        UserDetailsComponent,
        //HeaderComponent
    ],
    imports : [
        CommonModule,
        UsersRoutings,
        //HeaderComponent
        //SharedModule
        //HeaderModule
    ],
    providers : []
})

export class UserModule{}