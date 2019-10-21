import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
    schedule: any = {};
    selectedDay = 'sabado';
    objectKeys = Object.keys;
    constructor() {}

    ngOnInit() {
        this.schedule = {
            sabado: {
                day: 'sabado',
                date: 'Noviembre 16',
                events: [
                    {
                        type: 'talk',
                        title: 'Registro de asistentes',
                        subtitle: '',
                        date: '8:00 AM',
                    },
                    {
                        type: 'talk',
                        title:
                            'DevFest introduction',
                        date: '9:00 AM',
                    },
                    {
                        type: 'talk',
                        title:
                            'Sponsors presentation',
                        date: '9:10 AM',
                    },
                    {
                        type: 'talk',
                        title:
                            'Uniendo fuerzas: Angular + AI',
                        subtitle: 'Luis Aviles',
                        date: '9:30 AM',
                    },
                    {
                        type: 'talk',
                        title:
                            'Las formas de desplegar web apps en google cloud platform, gratuitas y de pago',
                        subtitle: 'Felipe Lujan',
                        date: '10:00 AM',
                    },
                    {
                        type: 'talk',
                        title:
                            'PR en la era de las Startups',
                        subtitle: 'Ximena orjuela',
                        date: '10:20 AM',
                    },
                    {
                        type: 'break',
                        title:
                            'Break & Networking',
                        date: '10:50 AM',
                    },
                    {
                        type: 'talk',
                        title:
                            'Building Massively Asynchronous Serverless Applications',
                        subtitle: 'Grant Timmerman',
                        date: '11:10 AM',
                    },
                    {
                        type: 'talk',
                        title:
                            'Automatizar tareas usando google scripting',
                        subtitle: 'Andrés Bedoya',
                        date: '11:40 AM',
                    },
                    {
                        type: 'talk',
                        title:
                            'Tú no conoces de lo que quieres, tu usuario sabe de lo que quiere: Android Dynamic Features',
                        subtitle: 'Diego Ramírez Vásquez',
                        date: '12:10 AM',
                    },
                    {
                        type: 'break',
                        title:
                            'Free Lunch',
                        date: '12:35 AM',
                    },
                    {
                        type: 'talk',
                        title:
                            'DevFest presentation',
                        date: '13:35 PM',
                    },
                    {
                        type: 'talk',
                        title:
                            'Diseñando mejores APIs con OpenAPI y Google Cloud Endpoints',
                        subtitle: 'Adriana Moya',
                        date: '13:45 PM',
                    },
                    {
                        type: 'talk',
                        title:
                            'Creando extensiones para Chrome',
                        subtitle: 'Diego Castro',
                        date: '14:15 PM',
                    },
                    {
                        type: 'talk',
                        title:
                            'Swift for TensorFlow - The Next Generation platform for Deep Learning.',
                        subtitle: 'Isabel Palomar',
                        date: '14:45 PM',
                    },
                    {
                        type: 'talk',
                        title:
                            'Hakuna matata: Koin, Koroutines & all the Kotlin love for Android',
                        subtitle: 'Adrian Catalan',
                        date: '15:15 PM',
                    },
                    {
                        type: 'talk',
                        title:
                            'Let\'s talk about State Management in Flutter',
                        subtitle: 'Diego Velasquez Lopez',
                        date: '15:45 PM',
                    },
                    {
                        type: 'break',
                        title:
                            'Break & Networking',
                        date: '16:00 PM',
                    },
                    {
                        type: 'talk',
                        title:
                            'Code like Google does with Nx',
                        subtitle: 'Diego Juliao',
                        date: '16:25 PM',
                    },
                    {
                        type: 'talk',
                        title:
                            'Type safety from front to back with GraphQL and Angular',
                        subtitle: 'Bram Borggreve',
                        date: '16:45 PM',
                    },
                    {
                        type: 'break',
                        title:
                            'Speaker Panel',
                        subtitle: 'Time to ask anything to all our speakers',
                        date: '17:15 PM',
                    },
                    {
                        type: 'break',
                        title:
                            'Closing & Kahoot Time!!',
                        date: '17:50 PM',
                    },
                    {
                        type: 'break',
                        title:
                            'End of the event',
                        date: '18:30 PM',
                    }
                ],
            },
        };
    }
}
