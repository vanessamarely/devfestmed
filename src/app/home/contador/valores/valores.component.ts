import {Component, OnInit, OnChanges, Input} from '@angular/core';

@Component({
    selector: 'app-valores',
    templateUrl: './valores.component.html',
    styleUrls: ['./valores.component.scss']
})
export class ValoresComponent implements OnInit, OnChanges {

    @Input() valor: any;
    @Input() legenda: string;

    constructor() { }

    ngOnInit() { }

    ngOnChanges() {
        this.valor = this.valor < 10 ? '0' + this.valor : this.valor;
    }

}
