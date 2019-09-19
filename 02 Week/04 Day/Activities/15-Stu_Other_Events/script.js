var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");


document.addEventListener("click", function() {
  document.getElementById('x').innerHTML = event.clientX;
  document.getElementById('y').innerHTML = event.clientY
});

document.addEventListener("keypress", function(e) {
  document.getElementById("key").innerHTML = e.which;
  document.getElementById("code").innerHTML = e.keyCode;
 
})

document.addEventListener("keydown", function() {
  document.getElementById("status").innerHTML = "down"
}) 

document.addEventListener("keyup", function() {
  document.getElementById("status").innerHTML = "up"
}) 


function toggleDisplay(event) {
  var value = event.target.value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}
