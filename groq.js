const axios = require('axios');
const { GROQ_API_KEY } = require('./config');

async function polishText(text) {
  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: "llama3-8b-8192",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that corrects grammar, spelling, and makes text clean and natural , and also please dont add unnessesary punctuations , only give valid punctuation marks "
          },
          {
            role: "user",
            content: text
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content.trim();

  } catch (err) {
    console.error("Groq Error:", err.message);
    return text; // fallback
  }
}

module.exports = { polishText };