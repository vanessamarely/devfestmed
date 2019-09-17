import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {SharedRoutingModule} from './shared-routing.module';

import {MaterializeModule} from "angular2-materialize";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        MaterializeModule,
        SharedRoutingModule
    ],
    declarations: [NotFoundComponent],
    providers: [
    ],
    exports: [
        FormsModule,
        HttpModule,
        MaterializeModule,
        NotFoundComponent
    ]
})
export class SharedModule { }
