const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it('method should take a string as an argument and return a new reversed version of the string. e.g. "Hello" should return "elloH".'), () => {
     const obj = new Algo().reverse('hello')

     expect(obj).toEqual('olleh')
    }
  });

  describe("isPalindrome", () => {
    it('should take a string as an argument and return the boolean `true` if the provided string is a palindrome. A palindrome is a word that is the same backwards as it is forwards, e.g. "racecar". Return `false` is the string is not a palindrome.'), () => {
      const obj = new Algo().reverse('racecar')

      expect(obj).toEqual(true)
    }
  });

  describe("capitalize", () => {
      it('should take a string as an argument and return a new string with the first letter of each word capitalized. e.g. "hello world!" should return "Hello World!".'), () => {
        const obj = new Algo().capitalize('hello world!');
        
        expect(obj).toEqual('Hello World!')
      }


  });
});
