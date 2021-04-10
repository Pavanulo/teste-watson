const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Comment = require('../models/Comment')

const connection = new Sequelize(dbConfig)

Comment.init(connection)

module.exports = connection