/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (!helper(s[i], stack)) {
      return false;
    }
  }
  return stack.length === 0;
};
var helper = function (c, stack) {
  switch (c) {
    case "}":
      if (stack.length && stack[stack.length - 1] == "{") {
        stack.pop();
        return true;
      } else {
        return false;
      }
    case ")":
      if (stack.length && stack[stack.length - 1] == "(") {
        stack.pop();
        return true;
      } else {
        return false;
      }
    case "]":
      if (stack.length && stack[stack.length - 1] == "[") {
        stack.pop();
        return true;
      } else {
        return false;
      }
    default:
      stack.push(c);
      return true;
  }
};
