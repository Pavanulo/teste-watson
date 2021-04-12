const { Router } = require('express')
const express = require('express')
const CommentController = require('./controllers/CommentController')
const textToSpeech = require('./config/watson')
const fs = require('fs')

const routes = express.Router()

routes.get('/comments', CommentController.list)
routes.post('/play', CommentController.play)

routes.post('/comments', CommentController.store)

module.exports = routes