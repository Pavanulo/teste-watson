const { Router } = require('express')
const express = require('express')
const CommentController = require('./controllers/CommentController')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.send('funcionando')
})

routes.get('/comments', CommentController.list)

routes.post('/comments', CommentController.store)

module.exports = routes