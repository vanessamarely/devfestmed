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
            name: 'Diego Regino',
            picture: '/assets/img/team/diego.jpg',
        },
        {
            name: 'Maria Isabel Rincon',
            picture: '/assets/img/team/isabel.jpg',
        },
        {
            name: 'Gerlis Alvarez ',
            picture: '/assets/img/team/gerlys.jpg',
        },
        {
            name: 'Lina Maria Montaño',
            picture: '/assets/img/team/lina.png',
        },
        {
            name: 'Diego Alvarez',
            picture: '/assets/img/team/diegoAlvarez.jpg',
        },
        {
            name: 'Jhon Jairo Hernandez',
            picture: '/assets/img/team/jhonJairo.jpg',
        },
        {
            name: 'Brayan Hernandez',
            picture: '/assets/img/team/brayan.jpg',
        }
    ];

    constructor() {}

    ngOnInit() {}
}
