let submit = document.getElementById("submit");
let priceAmount = document.getElementById('price');
let tipAmount = document.getElementById('tip-amount')
let newTotal = document.getElementById("new-total")


submit.addEventListener("click", function(event) {
    event.preventDefault();
    let price = parseInt(priceAmount.value)

    console.log(isNaN(price))

    if (isNaN(price)) {
        alert("invalid input; please ensure that price is a number")
    } else {
        let tip = price * .15;
        let total = price + tip;
        
        tipAmount.innerHTML = tip;
        newTotal.innerHTML = total;
    }
    
})

