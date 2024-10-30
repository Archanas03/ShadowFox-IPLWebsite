let likes = 0;

function likeTeam() {
    likes += 1;
    document.getElementById("likeCount").textContent = `Likes: ${likes}`;

    // Trigger confetti
    confetti({
        particleCount: 2000, // Number of confetti pieces
        spread: 1000, // Spread angle
        origin: { y: 0.6 } // Starting point of confetti
    });

    // Optional: Add a celebration message
    const celebrationDiv = document.getElementById("celebration");
    celebrationDiv.innerHTML = "<p>🎉 Thank you for liking! 🎉</p>";
    celebrationDiv.style.display = 'block'; // Show the celebration message
}
