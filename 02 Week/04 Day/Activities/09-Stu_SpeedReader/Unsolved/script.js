var timeEl = document.getElementById("time");
var readEl = document.getElementById("read");



timeEl.style.textAlign = "center"
readEl.style.textAlign = "center"

var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";

interval =  prompt("How fast (Lower is faster)")
prepareRead(interval);


function prepareRead(interval) {
  let secondsLeft = 5;

  let timerInterval = setInterval(function() {
    timeEl.innerHTML = secondsLeft;
    secondsLeft--;

    if(secondsLeft === 0) {
      timeEl.innerHTML = "0";
      clearInterval(timerInterval);
      speedRead(interval);
    }

  }, 1000);
}

function speedRead(interval) {
  // Print words to the screen one at a time.
  let words = poem.split(" ")
  let wordCount = 0;

  let timerInterval = setInterval(function() {
    readEl.innerHTML = words[wordCount++];

    if (wordCount === words.length) {
      readEl.innerHTML = "fin"
      clearInterval(timerInterval);
    }

  }, interval)
}


