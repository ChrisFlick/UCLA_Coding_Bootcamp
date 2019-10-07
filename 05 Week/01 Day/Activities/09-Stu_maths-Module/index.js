var maths = require('./maths.js');

let operation =  process.argv[2];
let numOne = process.argv[3];
let numTwo = process.argv[4];

let num;

switch (operation) {
    case "sum": 
        num = maths.sum(numOne, numTwo)
        break;
    case 'difference':
        num = maths.difference(numOne, numTwo)
        break;
    case 'product': 
        num = maths.product(numOne, numTwo);
        break;
    case 'quotient':
        num = maths.quotient(numOne,numTwo)
        break;
}

console.log(num)