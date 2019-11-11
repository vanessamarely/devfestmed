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
                bio: `Software engineer, author and mentor.  Founder of Code Your Future Colombia `,
            },
            {
                name: 'Felipe Lujan',
                picture: '../../../../assets/img/guests/Felipe_Lujan.jpg',
                bio: `Soy desarrollador front-end en globant, trabajo con angular y react y me gusta experimentar con tecnologías cloud como GCP y AWS. `,
            },
            {
                name: 'Ximena Orjuela',
                picture: '../../../../assets/img/guests/Ximena_Orjuela.jpg',
                bio: `Publicista, Relacionista Publica, trabajando en PR con varios emprendimientos en la región.`,
            },
            {
                name: 'Andrés Bedoya',
                picture: '../../../../assets/img/guests/Andres_Bedoya.jpg',
                bio: `Profesor de programación. Ingeniero informático, próximo diseñador gráfico y magister en Desarrollo de software.`,
            },
            {
                name: 'Diego Ramírez Vásquez',
                picture: '../../../../assets/img/guests/Diego_Ramirez_Vasquez.jpg',
                bio: `Android Software Engineer at Wizeline. Diego started in Android development since 6 years ago and now he love learn and share everything he have learned.`,
            },
            {
                name: 'Diego Castro',
                picture: '../../../../assets/img/guests/Diego_Castro.jpg',
                bio: `Senior Frontend developer at Globant. Passionated Frontend developer, always giving and learning more day after day.`,
            },
            {
                name: 'Isabel Palomar',
                picture: '../../../../assets/img/guests/Isabel_Palomar.jpg',
                bio: `Software Engineer. Isabel Palomar is a Mexican Software engineer whose expertise covers back-end and Android development. She has co-organized several tech communities in Mexico and US such as GDG Guadalajara, Tech Women Community, WWCode Ciudad Guzmán and JUG PA, and participated as a mentor and teacher in educational platforms like CodePath and Edx.`,
            },
            {
                name: 'Diego Velasquez Lopez',
                picture: '../../../../assets/img/guests/Diego_Velasquez_Lopez.jpg',
                bio: `Google Developer Expert en Flutter/Dart , Arquitecto de Software Móvil en Aeyrium. Diego Velásquez es un Ingeniero de Software con más de 10 años de experiencia, enfocado en el desarrollo de apps móviles Android/iOS/Flutter.`,
            },
            {
                name: 'Diego Juliao',
                picture: '../../../../assets/img/guests/Diego_Juliao.jpg',
                bio: `FullStack JavaScript Engineer. Software Engineer with 4+ years of professional experience focused on javascript technologies, passionate and committed with the quality of his work. With very solid knowledge about Javascript and Typescript.`,
            }
        ];
    }
}
