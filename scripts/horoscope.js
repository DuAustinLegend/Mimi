// scripts/horoscope.js
const horoscopes = [
    "Today is your lucky day, Mimi!",
    "You will find joy in unexpected places.",
    "Someone special is thinking about you right now.",
    "A wonderful surprise awaits you soon!"
];

document.querySelector("#horoscopeForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const horoscope = horoscopes[Math.floor(Math.random() * horoscopes.length)];
    document.querySelector("#horoscopeResult").textContent = horoscope;

    const utter = new SpeechSynthesisUtterance(horoscope);
    window.speechSynthesis.speak(utter);
});
