const todo = require('../models/todoModel')

class controller {
    static async getTodo(req, res) {
        try {
            const get = await todo.getTodo()
            res.status(200).json(get)
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' })
        }
    }

    static async detailTodo(req, res) {
        try {
            const todoId = req.params.id
            const detail = await todo.detailTodo(todoId)
            res.status(200).json(detail)
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' })
        }
    }

    static async createTodo(req, res) {
        try {
            const title = req.body.title
            await todo.createTodo(title)
            res.status(200).json({ message: 'Todo created successfully' })
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' })
        }
    }

    static async deleteTodo(req, res) {
        try {
            const todoId = req.params.id
            await todo.deleteTodo(todoId)
            res.status(200).json({ message: 'Todo deleted successfully' })
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' })
        }
    }
}

module.exports = controller