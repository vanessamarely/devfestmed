import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-section-matriz',
    templateUrl: './section-matriz.component.html',
    styleUrls: ['./section-matriz.component.scss']
})
export class SectionMatrizComponent implements OnInit {

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit() { }

    trust(url: string): any {
        return this.sanitizer.bypassSecurityTrustStyle('url(' + url + ')');
    }

}
