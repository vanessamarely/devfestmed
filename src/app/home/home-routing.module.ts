import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "../shared/not-found/not-found.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class HomeRoutingModule { }
