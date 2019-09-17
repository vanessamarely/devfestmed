import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-section-mapa',
    templateUrl: './section-mapa.component.html',
    styleUrls: ['./section-mapa.component.scss']
})
export class SectionMapaComponent implements OnInit {

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit() { }

    trust(url: string): any {
        return this.sanitizer.bypassSecurityTrustStyle('url(' + url + ')');
    }

}
