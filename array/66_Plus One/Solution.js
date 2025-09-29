var plusOne = function (digits) {
  let result = [];
  return helper(digits, digits.length - 1, 1, result);
};

var helper = function (digits, i, carry, result) {
  if (i < 0) {
    if (carry > 0) result.unshift(carry);
    return result;
  }

  let sum = digits[i] + carry;
  result.unshift(sum % 10);
  let nextCarry = Math.floor(sum / 10);

  return helper(digits, i - 1, nextCarry, result);
};