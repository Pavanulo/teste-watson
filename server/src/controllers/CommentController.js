const Comment = require('../models/Comment')

module.exports = {
    async list(req, res) {
        const comment = await Comment.findAll()

        return res.json(comment)
    },

    async store(req, res) { // pode receber o parametro do path aqui futuramente
        const { comment } = req.body
        console.log(req.body)
        console.log(comment)
        const audiopath = 'path teste'
        const data = await Comment.create({ comment, audiopath })

        return res.json(data)
    }
}