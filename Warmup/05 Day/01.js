console.log(sumEven(0, 3));

function sumEven(first, last) {
    let sum = 0;
    for (let i = first; i < last + 1; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}