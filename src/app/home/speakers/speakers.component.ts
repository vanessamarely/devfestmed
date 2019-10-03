import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-speakers',
    templateUrl: './speakers.component.html',
    styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent implements OnInit {
    speakers = [];
    selectedSpeaker;

    ngOnInit() {
        this.speakers = [
            {
                name: 'Luis Aviles',
                picture: '../../../../assets/img/guests/luis-aviles.png',
                bio: `Luis es Google Developer Expert en Tecnologías Web y Angular. Tiene más de 8 años de experiencia desarrollando software. Se considera entusiasta de JavaScript y el Open Source. Ha participado en diferentes eventos y conferencias internacionales de tecnología, dando charlas técnicas, talleres y diversas sesiones de capacitación. 
                Es organizador de la comunidad Angular Bolivia y la conferencia NG Bolivia.`,
            }
        ];
    }
}
