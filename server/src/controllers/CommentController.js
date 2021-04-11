const Comment = require('../models/Comment')
const textToSpeech = require('../config/watson')
const path = require('path')
const fs = require('fs')
const sound = require('sound-play')

module.exports = {
    async play(req, res) {
        try {
            const { id } = req.body
            console.log(id)
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

    async store(req, res) { // pode receber o parametro do path aqui futuramente
        const { comment } = req.body
        console.log(req.body)        
        const audiopath = convert(comment)
        console.log(audiopath)
        const data = await Comment.create({ comment, audiopath })

        return res.json(data)
    }
}

function convert(comment){
    
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
        fs.writeFileSync(`audios/./${content.text.replace(/\s/g,'').substr(0,255)}.wav`, buffer);
        console.log(filePath)
      })
      .catch(err => {
        console.log('error:', err);
      });
    
       return filePath = path.join(__dirname,'/../../audios',`${content.text.replace(/\s/g,'').substr(0,255)}.wav`)
}