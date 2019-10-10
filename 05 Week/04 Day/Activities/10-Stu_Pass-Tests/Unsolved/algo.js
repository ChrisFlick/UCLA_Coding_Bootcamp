function Algo() {}


Algo.prototype.reverse = function(str) {
    let reversedArray = []
    let reversed = ""

    for (let i = 0; i < str.length; i++) {
        reversedArray.unshift(str[i]);
    }

    for (let i = 0; i < reversedArray.length; i++) {
        reversed += reversedArray[i]
    }
    return reversed
};

Algo.prototype.isPalindrome = function(str) {
    let alg = new Algo();

    if (alg.reverse(str) === str) {
        return true;
    } else {
        return false;
    }
};

Algo.prototype.capitalize = function(str) {
    let words = str.split(" ")

    for (let i = 0; i < words.length; i++) {
        words[0].toUppercase
    }
};

module.exports = Algo;
