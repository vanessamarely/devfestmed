import {Question} from "./question";

export class Survey {
    questions: Array<Question>;

    constructor() {
        this.questions = new Array<Question>();
    }
}
