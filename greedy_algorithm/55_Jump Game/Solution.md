# Intuition

Each element in the array tells us **how far we can jump from that position**.  
So instead of trying all jump combinations, we only need to track **the farthest index we can reach** while moving forward.

If at any point we reach an index that is **beyond our maximum reachable position**, then reaching the end is impossible.

This leads to a simple **greedy strategy**.

---

# Approach

1. Initialize a variable `maxIndex` to track the farthest index reachable so far.
2. Iterate through the array from left to right:
   - If the current index `i` is greater than `maxIndex`, it means we cannot reach this position → return `false`.
   - Otherwise, update `maxIndex` as:
     ```
     maxIndex = max(maxIndex, i + nums[i])
     ```
3. If the loop finishes without failure, it means we can reach the last index → return `true`.

---

# Complexity

- **Time complexity:** `O(n)`  
  We traverse the array once.
- **Space complexity:** `O(1)`  
  Only one variable is used.

---

# Code

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxIndex) return false;
    maxIndex = Math.max(maxIndex, i + nums[i]);
  }

  return true;
};
```
