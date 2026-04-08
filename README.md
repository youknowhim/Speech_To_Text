# 🎙️ VocalFlow Windows (Minimal Voice Dictation App)

A lightweight Windows desktop application that lets you **record speech, convert it to text, enhance it using AI, and paste it anywhere instantly**.

---

## 🚀 Features

### 🎤 Voice Dictation

* Press a hotkey to start/stop recording
* Fast and responsive audio capture (no file storage)

### ⚡ Fast Speech-to-Text

* Powered by **Deepgram**
* Near real-time transcription using optimized audio streaming

### ✨ AI Text Enhancement

* Uses **Groq**
* Automatically corrects:

  * Grammar
  * Spelling
  * Sentence structure

### ⌨️ Dynamic Hotkey System

* First key press sets your hotkey automatically
* Press once → start recording
* Press again → stop & process

### 📋 Universal Clipboard Support

* Output is copied to clipboard
* Paste anywhere using `Ctrl + V`

### 📊 API Monitoring

* Displays:

  * Deepgram balance
  * Groq API status

### 🎨 Clean Minimal UI

* Lightweight, distraction-free interface
* Designed for productivity

---

## 🧠 How It Works

```text
Key Press → Record Audio → Transcribe (Deepgram)
→ Enhance Text (Groq) → Copy to Clipboard → Paste Anywhere
```

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS (Minimal UI)
* **Backend (Electron Renderer):** JavaScript
* **Desktop Framework:** Electron
* **Speech-to-Text:** Deepgram API
* **AI Processing:** Groq API (LLaMA3)
* **Audio Capture:** MediaRecorder API
* **Clipboard:** Electron Clipboard API

---

## 📁 Project Structure

```
project/
│
├── main.js   <br>       # Electron entry point
├── index.html <br>       # UI + logic
├── style.css       <br>  # Styling
├── audio.js    <br>      # Audio recording (MediaRecorder)
├── deepgram.js  <br>     # Speech-to-text API
├── groq.js     <br>      # Text polishing (AI)
├── injector.js  <br>     # Clipboard handling
├── balance.js   <br>     # API balance/status
├── config.js   <br>      # API keys
└── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
cd vocalflow-windows
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Add API keys

Create/update `config.js`:

```js
module.exports = {
  DEEPGRAM_API_KEY: "your_deepgram_key",
  GROQ_API_KEY: "your_groq_key"
};
```

---

### 4️⃣ Run the app

```bash
npm start
```

---

## 🎯 Usage

1. Launch the app
2. Press any key → it becomes your hotkey
3. Press hotkey → start recording
4. Speak
5. Press hotkey again → stop
6. Text appears & is copied
7. Press `Ctrl + V` anywhere to paste

---

## ⚡ Performance

* Recording: ~2–3 sec
* Processing: ~2 sec
* Total response time: **~3–5 seconds**

---

## ⚠️ Limitations

* Hotkey works only when app is focused (not global)
* Clipboard paste requires manual `Ctrl + V`
* Uses batch transcription (not real-time streaming)

---

## 🔮 Future Improvements

* Global hotkey support
* Real-time streaming transcription (WebSockets)
* Floating mic overlay
* Multi-language support
* Customizable UI & themes

---

## 💡 Key Design Decisions

* Used **batch transcription** for simplicity and stability
* Implemented **clipboard-based output** for universal compatibility
* Added **AI post-processing** to improve output quality

---

## 🧑‍💻 Author

**Pallav Rai**

---

## ⭐ Summary

A fast, minimal, and intelligent voice dictation system combining:

* Speech recognition
* AI text enhancement
* Seamless cross-application usability

---

🔥 *Built as part of a Software Development Internship assignment*
