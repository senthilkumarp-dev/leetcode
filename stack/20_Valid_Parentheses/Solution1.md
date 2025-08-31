# 20. Valid Parentheses

## Problem

Given a string `s` containing just the characters `'(', ')'`, `'{' , '}'`, `'[' , ']'`, determine if the input string is valid.  
A string is valid if:

1. Open brackets are closed by the same type of brackets.
2. Open brackets are closed in the correct order.
3. Every closing bracket has a corresponding opening bracket.

---

# Intuition

To validate parentheses, we need to check whether every closing bracket matches the most recent unmatched opening bracket.  
This naturally suggests a **stack**:

- Push opening brackets.
- On encountering a closing bracket, check if it matches the top of the stack.
- If it does, pop it; if not, the string is invalid.

---

# Approach

1. Initialize an empty stack.
2. Traverse each character in the string:
   - If it’s an opening bracket (`(`, `{`, `[`), push it to the stack.
   - If it’s a closing bracket (`)`, `}`, `]`), check the top of the stack:
     - If the top matches the corresponding opening bracket, pop it.
     - Otherwise, return `false`.
3. After processing all characters, the stack must be empty for the string to be valid.

---

# Complexity

- **Time complexity:**  
  $$O(n)$$ — we process each character once.
- **Space complexity:**  
  $$O(n)$$ — in the worst case, all characters are opening brackets stored in the stack.

---

# Code

```javascript
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
      }
      return false;
    case ")":
      if (stack.length && stack[stack.length - 1] == "(") {
        stack.pop();
        return true;
      }
      return false;
    case "]":
      if (stack.length && stack[stack.length - 1] == "[") {
        stack.pop();
        return true;
      }
      return false;
    default:
      stack.push(c);
      return true;
  }
};
```
