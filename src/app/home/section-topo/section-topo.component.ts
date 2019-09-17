import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-section-topo',
    templateUrl: './section-topo.component.html',
    styleUrls: ['./section-topo.component.scss']
})
export class SectionTopoComponent implements OnInit {

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit() { }

    trust(url: string): any {
        return this.sanitizer.bypassSecurityTrustStyle('url(' + url + ')');
    }

}
