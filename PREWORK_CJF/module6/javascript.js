// Causes box to increase in size
document.getElementById("buttonGrow").addEventListener("click", function grow() {
    document.getElementById("box").style.height = "250px";
});

// Turns the box blue
document.getElementById("buttonBlue").addEventListener("click", function blue() {
    document.getElementById("box").style.backgroundColor = 'blue';
});

// Changes opacity of box
document.getElementById("buttonFade").addEventListener("click", function fade() {
    document.getElementById("box").style.opacity= '0.5';
});

// Resets box to default position
document.getElementById("buttonReset").addEventListener("click", function reset() {
    document.getElementById('box').style.cssText = 'height:150px; width:150px; background-color:orange; margin:25px';
});