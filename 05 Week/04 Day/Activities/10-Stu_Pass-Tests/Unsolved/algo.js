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
    return this.reverse(str) === str;
};

Algo.prototype.capitalize = function(str) {
    return str.split(' ').map(word => {
        return word.substring(0,1).toUpperCase() + word.substring(1)
    }).join(' ')
};

module.exports = Algo;
