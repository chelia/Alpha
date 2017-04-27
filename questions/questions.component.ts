import {Component, OnInit} from '@angular/core';
import {QuestionService} from "../../services/question.service";
import {Question} from "../../models/question";
import { Router } from '@angular/router';

@Component({
    selector: 'my-questions', // no se usa al utilizar el routing
    templateUrl: './app/components/questions/questions.component.html' // la direccion donde esta el componente html que se va a ejecutar
})

export class QuestionsComponent implements OnInit { //arranca al iniciar el componente

    questions: Question[]; // variable que contiene el array de preguntas
    selectedQuestion: Question; // variable de pregunta seleccionada
    error: any; // variable comodin para los errores

    constructor(
        private router: Router, // variable de router para el routing de la aplicacion
        private questionService: QuestionService) { } // variable para el servicio de preguntas
    getQuestions() { // metodos por el que obtenemos todas las preguntas
        this.questionService.getQuestions().then(questions => this.questions = questions);
    }
    ngOnInit() { // Llamado después del constructor se carge correctamente
        this.getQuestions();
    }
    onSelect(question: Question) { this.selectedQuestion = question; } // coge los valores de los campos de la pregunta seleccionada

    gotoDetail() { // navegar a la pagina 
        this.router.navigate(['/detailq', this.selectedQuestion._id]);
    }

    addQuestion() {
        this.selectedQuestion = null;
        this.router.navigate(['/detailq', 'new']);
    }

    deleteQuestion(question: Question, event: any) {
        event.stopPropagation();
        this.questionService
            .delete(question)
            .then(res => {
                this.questions = this.questions.filter(q => q !== question);
                if (this.selectedQuestion === question) { this.selectedQuestion = null; }
            })
            .catch(error => this.error = error);
    }
}