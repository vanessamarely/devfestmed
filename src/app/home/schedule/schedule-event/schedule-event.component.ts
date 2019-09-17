import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-schedule-event',
    templateUrl: './schedule-event.component.html',
    styleUrls: ['./schedule-event.component.scss'],
})
export class ScheduleEventComponent {
    @Input() event;
}
