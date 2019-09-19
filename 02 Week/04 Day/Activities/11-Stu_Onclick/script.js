let btnIncrement = document.getElementById('increment');
let btnDecrement = document.getElementById('decrement');
let htmlCount = document.getElementById('count');

let count = 0;

btnIncrement.addEventListener("click", function() {
    count++;
    htmlCount.innerHTML = count;
})

btnDecrement.addEventListener("click", function() {
    count--;
    htmlCount.innerHTML = count;
})

