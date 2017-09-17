import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';

import { SharedModule } from '../shared/shared.module';
import { AppRoutes } from "app/app.routings";

@NgModule({
    declarations : [
    //   HeaderComponent
    ],
    imports : [
        CommonModule,
        //SharedModule
        // AppRoutes
    ],
    exports : [
        // HeaderComponent
    ],
    providers : []
})

export class HeaderModule{}