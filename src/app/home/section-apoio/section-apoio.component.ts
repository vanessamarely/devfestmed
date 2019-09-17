import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-apoio',
    templateUrl: './section-apoio.component.html',
    styleUrls: ['./section-apoio.component.scss'],
})
export class SectionApoioComponent implements OnInit {
    public voluntarios = [
        {
            name: 'Vanessa Aristizabal',
            picture: '/assets/img/team/vanessa.jpg',
        },
        {
            name: 'Sebastian gomez',
            picture: '/assets/img/team/sebastian.jpg',
        },
        {
            name: 'Jorge Vergara',
            picture: '/assets/img/team/jorge.png',
        },
        {
            name: 'Carolina López',
            picture: '/assets/img/team/carolina.jpg',
        },
        {
            name: 'Fredy Granados',
            picture: '/assets/img/team/fredy.jpeg',
        },
        {
            name: 'Andrea Valderrama',
            picture: '/assets/img/team/andrea.jpg',
        },
        {
            name: 'Diego Regino',
            picture: '/assets/img/team/diego.jpg',
        },
        {
            name: 'Maria Isabel Rincon',
            picture: '/assets/img/team/isabel.jpg',
        },
    ];

    constructor() {}

    ngOnInit() {}
}
