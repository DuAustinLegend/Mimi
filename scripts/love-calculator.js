// scripts/love-calculator.js
document.querySelector("#loveForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const score = Math.floor(Math.random() * 101);
    document.querySelector("#loveScore").textContent = `Love Score: ${score}% ❤️`;

    let message;
    if (score > 80) message = "A match made in heaven!";
    else if (score > 50) message = "A beautiful connection awaits!";
    else message = "There's always potential for growth!";

    const utter = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utter);
});
