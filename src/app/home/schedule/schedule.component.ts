import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
    schedule: any = {};
    selectedDay = 'martes';
    objectKeys = Object.keys;
    constructor() {}

    ngOnInit() {
        this.schedule = {
            martes: {
                day: 'martes',
                date: '20 de agosto',
                events: [
                    {
                        type: 'talk',
                        title: 'Registro de asistentes',
                        subtitle: '',
                        date: '5:45 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Bienvenida',
                        subtitle: '',
                        date: '6:30 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Keynote: Why enterprises embrace Node.js',
                        subtitle: 'Serge Josipovic',
                        date: '7:00 PM',
                    },
                    {
                        type: 'break',
                        title: 'BREAK',
                        date: '7:30 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Detangling multithreading in Node.js',
                        subtitle: 'Adrián Estrada',
                        date: '8:00 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Yo no quiero hacer eso (a mano)',
                        subtitle: 'Olga Saucedo',
                        date: '8:30 PM',
                    },
                ],
            },
            miercoles: {
                day: 'miercoles',
                date: '21 de agosto',
                events: [
                    {
                        type: 'talk',
                        title: 'Registro de asistentes',
                        subtitle: '',
                        date: '5:45 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Node Projects @ Scale',
                        subtitle: 'Rob Howard & Pete McKinstry',
                        date: '6:30 PM',
                    },
                    {
                        type: 'break',
                        title: 'BREAK',
                        date: '7:00 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Entendiendo Protocol Buffers y GRPC con Node',
                        subtitle: 'Diego Botia',
                        date: '7:30 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Que es el CSS Crítico y como calcularlo',
                        subtitle: 'Julián Lamprea',
                        date: '8:00 PM',
                    },
                ],
            },
            jueves: {
                day: 'jueves',
                date: '22 de agosto',
                events: [
                    {
                        type: 'talk',
                        title: 'Registro de asistentes',
                        subtitle: '',
                        date: '5:45 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Native NodeJS Modules with Rust and WASM',
                        subtitle: 'Alex Ramírez',
                        date: '6:30 PM',
                    },
                    {
                        type: 'break',
                        title: 'BREAK',
                        date: '7:00 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Controlling the world with Node',
                        subtitle: 'Kevin Fonner',
                        date: '7:30 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Deno, una alternativa a Node.js',
                        subtitle: 'Óscar Granada',
                        date: '8:00 PM',
                    },
                ],
            },
            viernes: {
                day: 'viernes',
                date: '23 de agosto',
                events: [
                    {
                        type: 'talk',
                        title: 'Registro de asistentes',
                        subtitle: '',
                        date: '5:45 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Querido Diario: Hoy conocí a Node',
                        subtitle: 'Ana Sosa',
                        date: '6:30 PM',
                    },
                    {
                        type: 'break',
                        title: 'BREAK',
                        date: '7:00 PM',
                    },
                    {
                        type: 'talk',
                        title:
                            'Buenas prácticas para manejar la arquitectura de tu código',
                        subtitle: 'David Montoya',
                        date: '7:30 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Special guest talk',
                        subtitle: '',
                        date: '8:00 PM',
                    },
                    {
                        type: 'break',
                        title: 'After y 🍻',
                        subtitle: '',
                        date: '8:30 PM',
                    },
                ],
            },
            sabado: {
                day: 'sabado',
                date: '24 de agosto',
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
                            'Workshop: Plataforma de inteligencia aumentada para el mejoramiento de la sostenibilidad de cultivos agrícolas',
                        subtitle: 'Alejandro Peña & Team',
                        date: '8:30 AM',
                    },
                    {
                        type: 'talk',
                        title:
                            'Workshop: Serverless con NodeJS y lo magnífico de no preocuparse por escalabilidad',
                        subtitle: 'Camilo Montoya',
                        date: '8:30 AM',
                    },
                ],
            },
        };
    }
}
