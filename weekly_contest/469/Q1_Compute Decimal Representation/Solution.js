/**
 * You are given a positive integer n.

A positive integer is a base-10 component if it is the product of a single digit from 1 to 9 and a non-negative power of 10. For example, 500, 30, and 7 are base-10 components, while 537, 102, and 11 are not.

Express n as a sum of only base-10 components, using the fewest base-10 components possible.

Return an array containing these base-10 components in descending order.

 

Note: Please do not copy the description during the contest to maintain the integrity of your submissions.
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var decimalRepresentation = function (n) {
  let res = [];
  let base = 1;
  while (n > 10) {
    let remainder = n % 10;
    n = Math.floor(n / 10);
    if (remainder != 0) {
      res.unshift(remainder * base);
    }

    base = base * 10;
  }
  res.unshift(n * base);
  return res;
};