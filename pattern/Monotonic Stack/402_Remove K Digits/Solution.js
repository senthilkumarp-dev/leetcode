/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let stack = [];
  for (let digit of num.split("")) {
    while (stack.length && k > 0 && stack[stack.length - 1] > digit) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  while (stack.length && stack[0] === "0") stack.shift();

  return stack.length ? stack.join("") : "0";
};
