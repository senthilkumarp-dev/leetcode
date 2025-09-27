/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let stack = [];
  let answer = [];
  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {
      let idx = stack.pop();
      answer[idx] = prices[idx] - prices[i];
    }
    stack.push(i)
  }
  while (stack.length > 0) {
    let idx = stack.pop();
    answer[idx] = prices[idx];
  }
  return answer;
};