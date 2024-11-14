// scripts/compliment-bot.js
const compliments = [
    "You're amazing just the way you are!",
    "Your smile lights up my world!",
    "You're one of a kind!",
    "You make every day better!",
    "You're a breath of fresh air!"
];

function generateCompliment() {
    const inputText = document.querySelector("#complimentInput").value.toLowerCase();
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    document.querySelector("#complimentDisplay").textContent = randomCompliment;

    const utter = new SpeechSynthesisUtterance(randomCompliment);
    window.speechSynthesis.speak(utter);
}
