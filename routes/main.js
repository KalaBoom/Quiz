const
    express = require('express'),
    parser  = require('body-parser'),
    fs = require('fs'),
    router  = express.Router(),
    urlCoder = parser.urlencoded({extended: false})

router.get('/', urlCoder, (req, res, next) => {
    res.render('index', {
        title: 'Главная страница'
    })
})

router.get('/questions', (req, res) => {
    fs.readFile('questions.json', {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            res.send(data)
            res.end()
        } else {
            console.log(err)
        }
    })
})


module.exports = router