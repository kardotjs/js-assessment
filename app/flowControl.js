flowControlAnswers = {
  /**
   * Returns a string, that is either fizz, buzz, or fizzbuzz depending on a number num.
   * 
   * If the number is divisible by 3, the function should return 'fizz';
   * If the number is divisible by 5, the function should return 'buzz';
   * If the number is divisible by 3 and 5, the function should return 'fizzbuzz';
   * Otherwise the function should return the number.
   * If no number was provided or the value was not a number , return false.
   * 
   * @param {Number} num - A number used to determine the result
   * @returns {String} The string 'fizz', 'buzz', or 'fizzbuzz'
   */
  fizzBuzz: function fizzBuzz(num) {
    if (!Number.isInteger(parseInt(num))) {
      return false;
    }

    function isDivisibleBy(num, by) {
      return num % by === 0;
    }


    const by3 = isDivisibleBy(num, 3)
    const by5 = isDivisibleBy(num, 5)

    return by3 && by5 ? "fizzbuzz" :
      by3 ? "fizz" :
        by5 ? "buzz" :
          num;


  },
};
