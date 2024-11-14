// scripts/ai-art-selector.js
const artGallery = {
    "happy": "assets/images/art-happy.jpg",
    "thoughtful": "assets/images/art-thoughtful.jpg",
    "calm": "assets/images/art-calm.jpg",
    "excited": "assets/images/art-excited.jpg"
};

document.querySelector("#artForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const mood = document.querySelector("#moodInput").value.toLowerCase();
    const artPath = artGallery[mood] || "assets/images/art-default.jpg";

    const artElement = document.querySelector("#selectedArt");
    artElement.src = artPath;
    artElement.style.display = "block";
});
