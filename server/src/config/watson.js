const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const apikey = '6BQYHJ_fiLDDOHIcZU7hLIo2G3r2WOoJU1prrhiQtwcd'
const url = 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/5c6357f0-ae53-4ebc-b3df-d02631894887'

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: apikey,
  }),
  serviceUrl: url,
});

module.exports = textToSpeech