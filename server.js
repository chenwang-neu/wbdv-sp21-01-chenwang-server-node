const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/whiteboard',
    {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


const demos = require('./controllers/demos-controller')
demos(app)

require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(4000);