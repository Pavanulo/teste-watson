const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
require('dotenv').config({path: __dirname + '/.env'})

const apikey = process.env.API_KEY
const url = process.env.URL

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: apikey,
  }),
  serviceUrl: url,
});

module.exports = textToSpeech