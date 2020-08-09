import Quizer from './Quizer.min.js'
import View from './View.min.js'

let quizer, view

const btn = document.getElementById('btnAnswer')

function handlerAnswer(e) {
    view.checkAnswer()
    e.preventDefault()
} 

async function initQuiz() {
    const htmlQues = document.getElementById('question')
    const htmlAns = document.getElementsByName('Ans')
    fetch('/questions')
        .then(res => res.json())
        .then(json => {
            quizer = new Quizer(1, json)
            view = new View(quizer, htmlQues, htmlAns, handlerAnswer)
            btn.addEventListener('mousedown', handlerAnswer)
            view.showQuestion()
            view.showAnswers()
        })
}

initQuiz()



