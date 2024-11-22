const funFacts = [
    "I am 18 years old and love traveling around the world! ✈️",
    "I am an avid reader and read around 20 books per year! 📚",
    "I once baked a 3-tiered cake for a family gathering! 🎂",
    "I speak three languages fluently! 🗣️",
    "I'm learning to play the guitar in my free time! 🎸"
];

function showRandomFact() {
    const factDisplay = document.getElementById('fact-display');
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    
    // Add a fade effect
    factDisplay.style.opacity = 0;
    
    setTimeout(() => {
        factDisplay.textContent = funFacts[randomIndex];
        factDisplay.style.opacity = 1;
    }, 200);
}

// Show a random fact when the page loads
showRandomFact();
