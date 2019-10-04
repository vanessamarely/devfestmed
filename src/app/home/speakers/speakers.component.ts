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
                bio: `Luis es Google Developer Expert en Tecnologías Web y Angular. 
                Se considera entusiasta del Open Source, JavaScript y las comunidades. Ha participado en diferentes eventos y conferencias internacionales de tecnología, dando charlas técnicas, talleres y diversas sesiones de capacitación. 
                Es fundador organizador de la comunidad Angular Bolivia y la conferencia NG Bolivia.`,
            },
            {
                name: 'Adriana Fernanda Moya',
                picture: '../../../../assets/img/guests/Adriana_Fernanda_Moya.jpg',
                bio: `Ingeniera de Sistemas, especialista en Ingenieria de Software, actualmente trabajo como Cloud Engineer en Globant, Google Developer Expert en la categoria de Google Cloud Platform, soy coorganizadora de las comunidades Google Cloud Developer Community Bogotá, Women Techmakers Bogotá y GDG Bogotá.`,
            },
            {
                name: 'Grant Timmerman',
                picture: '../../../../assets/img/guests/Grant_Timmerman.jpg',
                bio: `Grant is a developer platform engineer at Google where he works on Serverless for Google Cloud Platform. Previously he led open source for G Suite APIs. He loves Node, GitHub, and plays the alto saxophone in his spare time.
                
                `,
            },
            {
                name: 'Bram Borggreve',
                picture: '../../../../assets/img/guests/bram.jpeg',
                bio: `Software engineer, author and mentor.  Founder of Code Your Future Colombia
                
                
                `,
            },
        ];
    }
}
