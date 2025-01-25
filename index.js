const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let elapsedTime = 0;
let timerInterval;

// Update the display with the formatted time
function updateDisplay() {
  const hours = String(Math.floor(elapsedTime / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((elapsedTime % 3600) / 60)).padStart(2, '0');
  const seconds = String(elapsedTime % 60).padStart(2, '0');
  display.textContent = `${hours}:${minutes}:${seconds}`;
}

// Start the timer
function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      elapsedTime++;
      updateDisplay();
    }, 1000);
  }
}

// Stop the timer
function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

// Reset the timer
function resetTimer() {
  stopTimer();
  elapsedTime = 0;
  updateDisplay();
}

// Event listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize
updateDisplay();
