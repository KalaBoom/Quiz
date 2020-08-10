import Quizer from './Quizer.min.js'
import View from './View.min.js'

let quizer, view

const btn = document.getElementById('btnAnswer')
const list = document.getElementById('levelsList') 
const levels = document.getElementById('btnLevels')

function handlerAnswer(e) {
    view.checkAnswer()
    e.preventDefault()
} 

async function initQuiz(level) {
    const htmlQues = document.getElementById('question')
    const htmlAns = document.getElementsByName('Ans')
    fetch('/questions')
        .then(res => res.json())
        .then(json => {
            quizer = new Quizer(level, json)
            view = new View(quizer, htmlQues, htmlAns, handlerAnswer)
            btn.addEventListener('mousedown', handlerAnswer)
            view.showQuestion()
            view.showAnswers()
        })
}

list.addEventListener('mousedown', e => {
    const level = e.target.textContent.split(' ')[1]
    document.getElementById('levelsBlock').classList.add('display-none')
    document.getElementById('quiz').classList.remove('display-none')
    initQuiz(level)
})

levels.addEventListener('mousedown', e => {
    document.getElementById('levelsBlock').classList.remove('display-none')
    document.getElementById('quiz').classList.add('display-none')
})






