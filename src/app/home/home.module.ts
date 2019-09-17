import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./home.component";
import { SectionTopoComponent } from "./section-topo/section-topo.component";
import { FormInscricaoComponent } from "./form-inscricao/form-inscricao.component";
import { ContadorComponent } from "./contador/contador.component";
import { ValoresComponent } from "./contador/valores/valores.component";
import { TituloComponent } from "./titulo/titulo.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { SpeakersComponent } from "./speakers/speakers.component";
import { SpeakerComponent } from "./speakers/speaker/speaker.component";
import { SpeakerInfoComponent } from "./speakers/speaker-info/speaker-info.component";
import { SectionMapaComponent } from "./section-mapa/section-mapa.component";
import { SectionApoioComponent } from "./section-apoio/section-apoio.component";
import { SectionMatrizComponent } from "./section-matriz/section-matriz.component";
import { ScheduleContentComponent } from "./schedule/schedule-content/schedule-content.component";
import { ScheduleEventComponent } from "./schedule/schedule-event/schedule-event.component";
import { SectionGuestsComponent } from "./section-guests/section-guests.component";
import { CallForProposalsComponent } from "./section-call-for-proposals/call-for-proposals.component";

import { L10nDirective } from "../directives/l10n/l10n.directive";

@NgModule({
    imports: [CommonModule, SharedModule, HomeRoutingModule],
    exports: [L10nDirective],
    declarations: [
        L10nDirective,
        HomeComponent,
        SectionTopoComponent,
        FormInscricaoComponent,
        ContadorComponent,
        CallForProposalsComponent,
        ValoresComponent,
        TituloComponent,
        ScheduleComponent,
        ScheduleContentComponent,
        ScheduleEventComponent,
        SpeakersComponent,
        SpeakerComponent,
        SpeakerInfoComponent,
        SectionMapaComponent,
        SectionApoioComponent,
        SectionMatrizComponent,
        SectionGuestsComponent
    ]
})
export class HomeModule {}
