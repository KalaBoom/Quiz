export default class View {
    constructor(quizer, docQues, docAns, handlerAnswer) {
        this.quizer = quizer
        this.ques = docQues
        this.ans = docAns
        this.correctAnswers = 0;
        this.numberAnswer = 0;
        this.handlerAnswer = handlerAnswer
    }
    showQuestion() {
        this.ques.textContent = this.quizer.question
    }
    showAnswers() {
        for(let i = 0; i < this.quizer.answers.length; i++) {
            this.ans[i].labels[0].textContent = this.quizer.answers[i]
        }
    }
    checkAnswer() {
        let check
        this.numberAnswer++;
        for(let i = 0; i < this.quizer.answers.length; i++) {
            if (this.ans[i].checked) {
                check = this.ans[i].labels[0].textContent
            }
        }
        if (check === this.quizer.answer) {
            this.correctAnswers++
        } 
        
        if (this.numberAnswer == 10) {
            this.showResults()
        } else {
            this.quizer.nextQuestion()
            this.showQuestion()
            this.showAnswers()
        }
    }
    showResults() {
        this.ques.textContent = "Вы набрали: " + this.correctAnswers
        document.getElementById("radio-buttons").classList.add('display-none')
        const btn = document.getElementById("btnAnswer")
        btn.textContent = 'Начать заново'
        btn.removeEventListener('mousedown', this.handlerAnswer)
        btn.addEventListener('mousedown', e => {
            this.restartQuiz()
        })
    }
    restartQuiz() {
        document.getElementById('radio-buttons').classList.remove('display-none')
        const btn = document.getElementById('btnAnswer')
        btn.addEventListener('mousedown', this.handlerAnswer)
        btn.textContent = "Ответить"
        this.quizer.restart()
        this.numberAnswer = 0
        this.correctAnswers = 0
        this.showQuestion()
        this.showAnswers()
    }
}