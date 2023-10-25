const express = require('express')
const router = express.Router()

const controller = require('../controllers/controller.js')

router.get('/', controller.getTodo)
router.get('/:id', controller.detailTodo)
router.post('/', controller.createTodo)
router.delete('/:id', controller.deleteTodo)

module.exports = router