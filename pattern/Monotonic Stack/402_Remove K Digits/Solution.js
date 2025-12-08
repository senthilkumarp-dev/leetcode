/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let stack = [];
  for (let digit of num.split("")) {
    while (
      stack.length &&
      k > 0 &&
      BigInt(stack[stack.length - 1]) > BigInt(digit)
    ) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  let ans = 0;
  for (let i = 0; i < stack.length; i++) {
    ans = ans + "" + stack[i];
  }
  while (ans[0] == "0") {
    ans = ans.slice(1);
  }
  return ans || "0";
};
