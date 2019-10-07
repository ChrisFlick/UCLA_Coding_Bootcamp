function sum(a, b) {
    return parseInt(a) + parseInt(b);
}

function difference(a,b) {
    return parseInt(a) - parseInt(b);
}

function product(a, b) {
    return parseInt(a) * parseInt(b)
}

function quotient(a, b) {
    return parseInt(a) % parseInt(b);
}

module.exports = {
    sum: sum,
    difference: difference,
    product: product,
    quotient: quotient,
}