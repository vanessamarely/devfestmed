import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-guests',
    templateUrl: './section-guests.component.html',
    styleUrls: ['./section-guests.component.scss'],
})
export class SectionGuestsComponent implements OnInit {
    imageIndex: number;
    guests: any;
    pageX: number;

    constructor() {}

    ngOnInit() {
        this.guests = [
            {
                image: 'assets/img/guests/luis-aviles.png',
                talk: 'Uniendo fuerzas: Angular + AI',
                name: 'Luis Aviles',
                title: 'Google Developer Expert en Tecnologías Web y Angular',
                social: '@luixaviles'
            },
            {
                image: 'assets/img/guests/Adriana_Fernanda_Moya.jpg',
                talk: 'Diseñando mejores APIs con OpenAPI y Google Cloud Endpoints',
                name: 'Adriana Fernanda Moya',
                title: 'Google Developer Expert Google Cloud Platform',
                social: '@adriifermo'
            },
            {
                image: 'assets/img/guests/Grant_Timmerman.jpg',
                talk: 'Building Massively Asynchronous Serverless Applications',
                name: 'Grant Timmerman',
                title: 'Developer platform engineer at Google',
                social: '@granttimmerman'
            },
            {
                image: 'assets/img/guests/bram.jpeg',
                talk: 'Type safety from front to back with GraphQL and Angular',
                name: 'Bram Borggreve',
                title: 'Software engineer, author and mentor.',
                social: '@beeman_nl'
            }
        ];
        this.imageIndex = 0;
    }

    public modifyImageIndex(digit: number): void {
        let index = this.imageIndex + digit;
        if (index < 0) {
            index = this.guests.length - 1;
        }
        if (index >= this.guests.length) {
            index = 0;
        }
        this.imageIndex = index;
    }

    public touchStart(e: TouchEvent) {
        const { pageX } = e.touches[0];
        this.pageX = pageX;
    }

    public touchEnd(e: TouchEvent) {
        const { pageX } = e.changedTouches[0];
        const left = this.pageX - pageX > 0;
        this.modifyImageIndex(left ? 1 : -1);
    }
}
