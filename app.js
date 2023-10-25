var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var todo = require('./routes/todo.js')
app.use('/todo', todo)

app.listen(3000)