var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;

var interval;
var paused = false
var work = true;

timer = localStorage.getItem('tomatoTimer')
if (timer) {
  timer = JSON.parse(timer)

  workMinutesInput.value = timer[0];
  restMinutesInput.value = timer[1];
}

minutesDisplay.textContent = workMinutesInput.value;

function startTimer() {
  // Write code to start the timer here
  if (!paused) {

    localStorage.setItem('tomatoTimer', JSON.stringify([workMinutesInput.value, restMinutesInput.value]))

    if (work) {
      totalSeconds = workMinutesInput.value * 60;
    } else {
      totalSeconds = restMinutesInput.value * 60;
    }

    secondsElapsed = 60;
  }
  
  clearInterval(interval);
  interval = setInterval( function() {
    paused = true; // Ensure hitting play again doesn't mess things up
    let fin = false;
    totalSeconds--;
    secondsElapsed--;

    

    if (totalSeconds > 60) {
      minutesDisplay.textContent = Math.floor(totalSeconds / 60);
    } else {
      minutesDisplay.textContent = 0;
    }

    if (secondsElapsed === 0) {
      secondsElapsed = 60;
    }
    


    if (totalSeconds === 0) {
      fin = true
      clearInterval(interval)
      secondsElapsed = "00";
    }

    secondsDisplay.textContent = secondsElapsed;
    
    if (fin) {
      if (work) {
        alert("Time for a break")
      } else {
        alert("time to get back to work!")
      }
      paused = false;
    }

  }, 1);
}

pauseButton.addEventListener('click', function() {
  paused = true;
  clearInterval(interval);
})

stopButton.addEventListener('click', function() {
  paused = false;
  clearInterval(interval);

  if (work) {
    totalSeconds = workMinutesInput.value * 60;
  } else {
    totalSeconds = restMinutesInput.value * 60;
  }
  
  secondsElapsed = "00";


  minutesDisplay.textContent = totalSeconds / 60
  secondsDisplay.textContent = secondsElapsed;
})

playButton.addEventListener("click", startTimer);

statusToggle.addEventListener('click', function() {
  paused = false;

  if (work) {
    work = false;
    statusSpan.textContent = "resting"

    minutesDisplay.textContent = restMinutesInput.value
    secondsElapsed.textContent = "00"

  } else {
    work = true;
    statusSpan.textContent = "working"

    minutesDisplay.textContent = workMinutesInput.value
    secondsElapsed.textContent = "00"
  }
})
