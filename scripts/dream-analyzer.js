// scripts/dream-analyzer.js
document.querySelector("#dreamForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const dreamText = document.querySelector("#dreamInput").value.toLowerCase();
    let interpretation = "An exciting new chapter awaits you!";

    if (dreamText.includes("water")) interpretation = "Water dreams often mean a refreshing change is coming!";
    else if (dreamText.includes("sky")) interpretation = "Dreaming of the sky hints at boundless opportunities ahead!";
    else if (dreamText.includes("animal")) interpretation = "Animals in dreams suggest a deep connection to your inner self.";
    else if (dreamText.includes("love")) interpretation = "Dreaming of love signifies beautiful relationships ahead!";

    document.querySelector("#dreamResult").textContent = interpretation;

    const utter = new SpeechSynthesisUtterance(interpretation);
    window.speechSynthesis.speak(utter);
});
