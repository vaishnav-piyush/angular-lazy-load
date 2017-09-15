import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const userRoutes : Routes = [
    { 
        path : '',
        component : UsersComponent,
        children : [
            {
                path : '',
                component : UserListComponent
            },
            {
                path : 'user-details',
                component : UserDetailsComponent
            }
        ]
    }
]

export const UsersRoutings:ModuleWithProviders = RouterModule.forChild(userRoutes);