// Fill in the body of each function with the code required

var add = function (num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    } else {
        new TypeError(`num1 is ${typeof num1}; num2 is ${typeof num2}. Please ensure both inputs are numbers!`)
    }   
}

var subtract = function (num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 - num2;
    } else {
        new TypeError(`num1 is ${typeof num1}; num2 is ${typeof num2}. Please ensure both inputs are numbers!`)
    }   
}

var multiply = function (num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 * num2;
    } else {
        new TypeError(`num1 is ${typeof num1}; num2 is ${typeof num2}. Please ensure both inputs are numbers!`)
    }   
}

var divide = function (num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 / num2;
    } else {
        new TypeError(`num1 is ${typeof num1}; num2 is ${typeof num2}. Please ensure both inputs are numbers!`)
    }   
}










