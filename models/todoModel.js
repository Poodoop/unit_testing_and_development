const pool = require('../config/connection.js')

class todo {
    static async getTodo() {
        try {
            const results = await pool.query(
                'SELECT * FROM todo'
            )
            return results.rows
        } catch (error) {
            throw error
        }
    }

    static async detailTodo(todoId) {
        try {
            const results = await pool.query(
                'SELECT * FROM todo WHERE id = $1',
                [todoId]
            )
            return results.rows
        } catch (error) {
            throw error
        }
    }

    static async createTodo(title) {
        try {
            await pool.query(
                'INSERT INTO todo ("title") VALUES ($1)',
                [title]
            )
        } catch (error) {
            throw error
        }
    }

    static async deleteTodo(todoId) {
        try {
            await pool.query(
                'DELETE FROM todo WHERE id = $1',
                [todoId]
            )
        } catch (error) {
            throw error
        }
    }
}

module.exports = todo