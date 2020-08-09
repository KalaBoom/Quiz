export default class Quizer {
    constructor(level, quiz) {
        this.level = --level
        this.quiz = quiz
        this.numberQuestion = 0
    }
    get question() { // получить вопрос
        return this.quiz["questions"][this.numberQuestion]["question"]
    }
    get answer() { // получить ответ
        return this.quiz["questions"][this.numberQuestion]["answer"]
    }
    get answers() { // получить варианты ответов
        return this.quiz["questions"][this.numberQuestion]["answers"]
    }
    nextQuestion() { // следующий вопрос
        this.numberQuestion++
    }
    restart() {
        this.numberQuestion = 0
    }
}