import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: "app-schedule-content",
    templateUrl: "./schedule-content.component.html",
    styleUrls: ["./schedule-content.component.scss"]
})
export class ScheduleContentComponent {
    @Input() content;
}
