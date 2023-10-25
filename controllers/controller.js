const todo = require('../models/todoModel')

class controller {
    static async getTodo(req, res) {
        try {
            const get = await todo.getTodo()
            res.json(get)
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' })
        }
    }

    static async detailTodo(req, res) {
        const todoId = req.params.id
        try {
            const detail = await todo.detailTodo(todoId)
            res.json(detail)
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' })
        }
    }

    static async createTodo(req, res) {
        const { title, id } = req.body
        try {
            await todo.createTodo(title, id)
            res.json({ message: 'Todo created successfully' })
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' })
        }
    }

    static async deleteTodo(req, res) {
        const todoId = req.params.id
        try {
            await todo.deleteTodo(todoId)
            res.json({ message: 'Todo deleted successfully' })
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' })
        }
    }
}

module.exports = controller