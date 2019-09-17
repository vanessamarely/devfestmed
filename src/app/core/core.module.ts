import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {HomeModule} from '../home/home.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        HomeModule
    ],
    declarations: []
})
export class CoreModule { }
