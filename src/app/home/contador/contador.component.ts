import {Component, OnInit, NgZone} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

    dias: number = 0;
    horas: number = 0;
    minutos: number = 0;
    segundos: number = 0;
    timer: Subscription = null;
    evento: any = moment('2017-04-01 08:30:00', 'YYYY-MM-DD HH:mm:ss');

    constructor(private zone: NgZone) {
        /*this.zone.runOutsideAngular(() => {
            this.timer = Observable.interval(1000).subscribe( x => this.eventTimer() )
        });*/

        if (this.evento.valueOf() > moment().valueOf())
            this.timer = Observable.interval(1000).subscribe( x => this.eventTimer() );
    }

    ngOnInit() { }

    private eventTimer(): void {
        let hoje = moment();

        this.dias = this.evento.diff(hoje, 'days');

        this.horas = moment(this.evento.valueOf())
            .subtract(this.dias, 'days')
            .diff(hoje, 'hours');

        this.minutos = moment(this.evento.valueOf())
            .subtract(this.dias, 'days')
            .subtract(this.horas, 'hours')
            .diff(hoje, 'minutes');

        this.segundos = moment(this.evento.valueOf())
            .subtract(this.dias, 'days')
            .subtract(this.horas, 'hours')
            .subtract(this.minutos, 'minutes')
            .diff(hoje, 'seconds');
    }

    done(): boolean {
        return this.evento.valueOf() > moment().valueOf();
    }

}
