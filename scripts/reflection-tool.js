// scripts/reflection-tool.js
const emojis = ["😊", "💖", "🌸", "🌞", "✨", "❤️"];
document.querySelector("#reflectionForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    document.querySelector("#reflectionResult").textContent = `Thank you for sharing! ${randomEmoji}`;
});
