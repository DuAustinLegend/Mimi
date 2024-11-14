// scripts/mood-predictor.js
document.querySelector("#moodForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let score = 0;
    const answers = document.querySelectorAll(".mood-input");
    answers.forEach(input => {
        score += parseInt(input.value);
    });
    const mood = score > 10 ? "Fantastic" : score > 6 ? "Good" : "Challenging";
    const message = mood === "Fantastic" ? "You're shining today!" :
                    mood === "Good" ? "Hope the day gets even better!" :
                    "Hang in there, tomorrow is a new day!";
    document.querySelector("#moodResult").textContent = `Mood: ${mood} - ${message}`;
});
