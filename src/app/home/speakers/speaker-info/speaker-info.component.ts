import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-speaker-info',
    templateUrl: './speaker-info.component.html',
    styleUrls: ['./speaker-info.component.scss'],
})
export class SpeakerInfoComponent {
    @Input() speaker;
    @Output() close: EventEmitter<any> = new EventEmitter();

    handleClose() {
        this.close.emit(null);
    }
}
