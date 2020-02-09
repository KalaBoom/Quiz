class Quizer {
    constructor(level, quiz) {
        this.level = --level
        this.quiz = quiz
        this.numberQuestion = 0
    }
    get question() { // получить вопрос
        return this.quiz[this.level]["questions"][this.numberQuestion]["question"]
    }
    get answer() { // получить ответ
        return this.quiz[this.level]["questions"][this.numberQuestion]["answer"]
    }
    get answers() { // получить варианты ответов
        return this.quiz[this.level]["questions"][this.numberQuestion]["answers"]
    }
    nextQuestion() { // следующий вопрос
        this.numberQuestion++
    }
}

class View {
    constructor(quizer, docQues, docAns) {
        this.quizer = quizer
        this.ques = docQues
        this.ans = docAns
        this.correctAnswers = 0;
        this.numberAnswer = 0;
    }
    showQuestion() {
        this.ques.textContent = quizer.question
    }
    showAnswers() {
        for(let i = 0; i < this.quizer.answers.length; i++) {
            this.ans[i].labels[0].textContent = this.quizer.answers[i]
        }
    }
    checkAnswer() {
        let check
        this.numberAnswer++;
        for(let i = 0; i < quizer.answers.length; i++) {
            if (this.ans[i].checked) {
                check = this.ans[i].labels[0].textContent
            }
        }
        if (check === quizer.answer) {
        // alert('Правильно')
            this.correctAnswers++
        } 
        // else {
        //     alert('Неправильно')
        // }
        // alert(this.numberAnswer)
        
        if (this.numberAnswer == 10) {
            this.showResults()
        } else {
            quizer.nextQuestion()
            this.showQuestion()
            this.showAnswers()
        }
        event.preventDefault();
    }
    showResults() {
        this.ques.textContent = "Вы набрали: " + this.correctAnswers
        document.getElementById("radio-buttons").classList.add('display-none')
        document.getElementById("button-answer").textContent = 'Начать заново'
    }
}

let htmlQues = document.getElementById('question')
let htmlAns = document.getElementsByName('Ans')

const quizer = new Quizer(1, Quiz)
const view = new View(quizer, htmlQues, htmlAns)

view.showQuestion()
view.showAnswers()

