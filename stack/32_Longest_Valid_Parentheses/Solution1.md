# 32. Longest Valid Parentheses

## Problem

Given a string `s` containing just `'('` and `')'`, return the length of the longest valid (well-formed) parentheses substring.

---

# Intuition

The challenge is to find the **longest continuous balanced substring**.  
A stack is useful for keeping track of **unmatched opening brackets and their indices**.  
By combining this with a map/dynamic storage, we can extend previously computed valid lengths when a new valid pair is found.

---

# Approach

1. Initialize:
   - `stack` to hold indices of `'('`.
   - `map` to store the length of valid substrings ending at a particular index.
   - `res` to track the maximum valid length.
2. Iterate over the string:
   - If the character is `'('`, push its index onto the stack.
   - If the character is `')'`:
     - If the stack is non-empty, pop the last `'('` index (`idx`).
     - Compute the length of the current valid substring:
       ```
       current = (i - idx + 1) + (map.get(idx - 1) || 0)
       ```
       - `(i - idx + 1)` is the new valid substring length.
       - `map.get(idx - 1)` adds any valid substring ending just before `idx`.
     - Store this in the map and update `res`.
3. Return `res`.

---

# Complexity

- **Time complexity:**  
  $$O(n)$$ — we traverse the string once.

- **Space complexity:**  
  $$O(n)$$ — for the stack and the map in the worst case.

---

# Code

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let res = 0;
  let stack = [];
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      if (stack.length) {
        let idx = stack.pop();
        let current = i - idx + 1 + (map.get(idx - 1) || 0);
        map.set(i, current);
        res = Math.max(current, res);
      }
    } else {
      stack.push(i);
    }
  }

  return res;
};
```
