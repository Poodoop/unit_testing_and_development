const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const todo = require('./routes/todo.js')
app.use('/todo', todo)

app.listen(3000)