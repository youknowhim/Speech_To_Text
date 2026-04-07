const axios = require('axios');
const { DEEPGRAM_API_KEY, GROQ_API_KEY } = require('./config');

// Deepgram Balance
async function getDeepgramBalance() {
  try {
    const res = await axios.get(
      'https://api.deepgram.com/v1/projects',
      {
        headers: {
          Authorization: `Token ${DEEPGRAM_API_KEY}`
        }
      }
    );

    const balance = res.data.projects[0].balance?.remaining || "N/A";

    return `$${balance}`;
  } catch (err) {
    console.error("Deepgram error:", err.message);
    return "Error";
  }
}

// Groq Status (no balance API)
async function getGroqStatus() {
  try {
    if (!GROQ_API_KEY) return "Not set";

    return "Active"; 
  } catch {
    return "Error";
  }
}

module.exports = { getDeepgramBalance, getGroqStatus };