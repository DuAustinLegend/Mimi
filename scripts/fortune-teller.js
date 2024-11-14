// scripts/fortune-teller.js
const fortunes = [
    "Your love will blossom in surprising ways!",
    "Good things are headed your way, keep an open heart.",
    "A new adventure awaits you both!",
    "Expect a sweet surprise soon!"
];

document.querySelector("#fortuneButton").addEventListener("click", () => {
    const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    document.querySelector("#fortuneDisplay").textContent = fortune;

    const utter = new SpeechSynthesisUtterance(fortune);
    window.speechSynthesis.speak(utter);
});
