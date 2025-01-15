let percentage = 0;
const percentDisplay = document.getElementById("percent");
const progressBar = document.getElementById("progressBar");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const incrementValueInput = document.getElementById("incrementValue");
const celebrationMessage = document.getElementById("celebrationMessage");

// Check if there's saved progress in localStorage
window.onload = () => {
  const savedProgress = localStorage.getItem('progress');
  if (savedProgress) {
    percentage = parseInt(savedProgress);
    updateProgress();
  }
};

// Update progress both on the screen and in localStorage
function updateProgress() {
  localStorage.setItem('progress', percentage);  // Save progress to localStorage
  percentDisplay.textContent = `${percentage}%`;
  progressBar.value = percentage;

  // Show celebration message when 100% is reached
  if (percentage === 100) {
    celebrationMessage.style.display = "block";
  } else {
    celebrationMessage.style.display = "none";
  }
}

// Add button: Increment the percentage
addBtn.addEventListener("click", () => {
  const incrementValue = parseInt(incrementValueInput.value);
  if (!isNaN(incrementValue) && percentage + incrementValue <= 100) {
    percentage += incrementValue;
    updateProgress();
  }
});

// Remove button: Decrease the percentage
removeBtn.addEventListener("click", () => {
  const decrementValue = parseInt(incrementValueInput.value);
  if (!isNaN(decrementValue) && percentage - decrementValue >= 0) {
    percentage -= decrementValue;
    updateProgress();
  }
  celebrationMessage.style.display = "none";
});
