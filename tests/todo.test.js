const app = require('../app')
const request = require('supertest')

describe("GET /todo", () => {
    test('Get all todo successfully', (done) => {
        request(app)
            .get('/todo')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.length).toBe(10)
                done()
            })
            .catch(done)
    })
});

describe("GET /todo/:id", () => {
    test('Get detailed todo successfully', (done) => {
        const id = 1
    
        request(app)
            .get(`/todo/${id}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.data.title).toBe("Wake Up")
                done()
            })
            .catch(done)
    });
    
})

describe("POST /todo", () => {
    test('Add todo successfully', (done) => {
        const postTodo = {
            title: "New Todo"
        }

        request(app)
            .post('/todo')
            .send(postTodo)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.message).toBe('Todo created successfully')
                done()
            })
            .catch(done)
    });
});

describe("DELETE /todo/:id", () => {
    test('Delete todo successfully', (done) => {
        const id = 5;
    
        request(app)
            .delete(`/todo/${id}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.message).toBe("Todo deleted successfully")
                done()
            })
            .catch(done)
    })
    
})
