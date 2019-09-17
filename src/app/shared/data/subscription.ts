import {Survey} from "./survey";

export class Subscription {
    name: string;
    email: string;
    cpf?:string;
    registered_at: number;
    survey: Survey;

    constructor() {
        this.survey = new Survey();
    }
}
