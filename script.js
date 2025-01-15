let percentage = 0;
const percentDisplay = document.getElementById("percent");
const progressBar = document.getElementById("progressBar");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const incrementValueInput = document.getElementById("incrementValue");
const celebrationMessage = document.getElementById("celebrationMessage");

// Update the progress bar and percentage display
function updateProgress() {
  percentDisplay.textContent = `${percentage}%`;
  progressBar.value = percentage;

  // Sync with an online resource (for example, using localStorage)
  localStorage.setItem("percentage", percentage);

  // Check if progress reaches 100%
  if (percentage === 100) {
    celebrationMessage.style.display = "block"; // Show the celebration message
    triggerConfetti(); // Trigger confetti animation
  }
}

// Add button: Increment the percentage by the value in the input field
addBtn.addEventListener("click", () => {
  const incrementValue = parseInt(incrementValueInput.value);
  if (!isNaN(incrementValue) && percentage + incrementValue <= 100) {
    percentage += incrementValue;
    updateProgress();
  }
});

// Remove button: Decrease the percentage by the increment value
removeBtn.addEventListener("click", () => {
  const decrementValue = parseInt(incrementValueInput.value);
  if (!isNaN(decrementValue) && percentage - decrementValue >= 0) {
    percentage -= decrementValue;
    updateProgress();
  }
  celebrationMessage.style.display = "none"; // Hide the celebration message when it’s decremented
});

// Load saved percentage from localStorage if available
window.onload = () => {
  const savedPercentage = localStorage.getItem("percentage");
  if (savedPercentage) {
    percentage = parseInt(savedPercentage);
    updateProgress();
  }
};

// Trigger confetti animation
function triggerConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { x: 0.5, y: 0.5 },
    colors: ['#ff0000', '#00ff00', '#0000ff', '#ffcc00', '#ff66cc']
  });
}
