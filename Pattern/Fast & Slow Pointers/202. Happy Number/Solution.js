/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let slow = square(n);
  let fast = square(square(n));

  while (true) {
    slow = square(slow);
    fast = square(square(fast));
    if (slow == fast) {
      break;
    }
  }
  return slow == 1;
};

const square = (num) => {
  let result = 0;
  let remainder = 0;
  while (num > 9) {
    remainder = num % 10;
    result = result + remainder * remainder;
    num = Math.floor(num / 10);
  }
  result = result + num * num;
  return result;
};
