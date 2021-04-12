const Comment = require('../models/Comment')
const textToSpeech = require('../config/watson')
const path = require('path')
const fs = require('fs')
const sound = require('sound-play')

module.exports = {
    async play(req, res) {
        try {
            const { id } = req.body
            const data = await Comment.findOne({where: { id: id}})
            await sound.play(data.audiopath)
            return res.json(data)
        } catch (error) {
            console.error(error)
        }
    },

    async list(req, res) {
        const comment = await Comment.findAll()

        return res.json(comment)
    },

    async store(req, res) {
        const { comment } = req.body        
        const audiopath = convert(comment)
        const data = await Comment.create({ comment, audiopath })

        return res.json(data)
    }
}

function convert(comment){
    let randomnumber = Math.random().toString()
    let date = Date.now().toString()
    let randompath = randomnumber+date

    const content = {
        text: comment,
        accept: 'audio/wav',
        voice: 'pt-BR_IsabelaV3Voice'
    }
    textToSpeech.synthesize(content)
    
      .then(response => {
        return textToSpeech.repairWavHeaderStream(response.result);
      })
      .then(buffer => {
        fs.writeFileSync(`audios/./${randompath}.wav`, buffer);
      })
      .catch(err => {
        console.error('error:', err);
      });
    
       return filePath = path.join(__dirname,'/../../audios',`${randompath}.wav`)
}