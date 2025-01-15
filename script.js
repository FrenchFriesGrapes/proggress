let percentage = 0;
const percentDisplay = document.getElementById("percent");
const progressBar = document.getElementById("progressBar");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const incrementValueInput = document.getElementById("incrementValue");
const celebrationMessage = document.getElementById("celebrationMessage");

// Sync progress value with localStorage
function syncProgress() {
  localStorage.setItem('progress', percentage);  // Save progress in localStorage
  percentDisplay.textContent = `${percentage}%`;
  progressBar.value = percentage;

  // Display celebration message when progress reaches 100%
  if (percentage === 100) {
    celebrationMessage.style.display = "block";
  } else {
    celebrationMessage.style.display = "none";
  }
}

// When progress changes in one tab, it will sync to others
window.addEventListener('storage', (event) => {
  if (event.key === 'progress') {
    percentage = parseInt(event.newValue);
    syncProgress();
  }
});

// Check if there's progress saved in localStorage when page loads
window.onload = () => {
  const savedProgress = localStorage.getItem('progress');
  if (savedProgress) {
    percentage = parseInt(savedProgress);
    syncProgress();
  }
};

// Add button: Increment the percentage
addBtn.addEventListener("click", () => {
  const incrementValue = parseInt(incrementValueInput.value);
  if (!isNaN(incrementValue) && percentage + incrementValue <= 100) {
    percentage += incrementValue;
    syncProgress();
  }
});

// Remove button: Decrease the percentage
removeBtn.addEventListener("click", () => {
  const decrementValue = parseInt(incrementValueInput.value);
  if (!isNaN(decrementValue) && percentage - decrementValue >= 0) {
    percentage -= decrementValue;
    syncProgress();
  }
  celebrationMessage.style.display = "none";
});
