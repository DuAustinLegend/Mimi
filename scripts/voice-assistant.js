// scripts/voice-assistant.js
const responses = {
    "hello": "Hi Mimi! How can I make your day brighter?",
    "how are you": "I’m here for you, Mimi! How are you feeling?",
    "love": "Love is in the air! Remember, you are truly cherished.",
    "goodbye": "Goodbye Mimi! Looking forward to our next chat!"
};

document.querySelector("#startVoiceAssistant").addEventListener("click", () => {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        let reply = responses[transcript] || "I'm here to chat anytime, Mimi!";
        document.querySelector("#voiceResponse").textContent = reply;

        const utter = new SpeechSynthesisUtterance(reply);
        window.speechSynthesis.speak(utter);
    };
});
