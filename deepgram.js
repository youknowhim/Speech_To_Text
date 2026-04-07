const axios = require('axios');
const { DEEPGRAM_API_KEY } = require('./config');

async function transcribeAudio(blob) {
  try {
    const arrayBuffer = await blob.arrayBuffer();

    const response = await axios.post(
      'https://api.deepgram.com/v1/listen?model=nova-2&smart_format=true',
      arrayBuffer,
      {
        headers: {
          Authorization: `Token ${DEEPGRAM_API_KEY}`,
          'Content-Type': 'audio/webm'
        }
      }
    );

    let text =
      response.data.results.channels[0].alternatives[0].transcript || '';

    text = text.replace(/\b(\w+)( \1\b)+/gi, '$1');

    return text || "No speech detected";

  } catch (err) {
    console.error(err.message);
    return "Error";
  }
}

module.exports = { transcribeAudio };