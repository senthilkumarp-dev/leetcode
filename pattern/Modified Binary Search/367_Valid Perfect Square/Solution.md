# Intuition

A perfect square is a number that can be expressed as the product of an integer with itself (e.g., 1, 4, 9, 16, ...).  
Instead of iterating through all possible numbers up to `num`, we can use **binary search** to efficiently check if such an integer exists.

---

# Approach

1. Handle small inputs:
   - If `num < 2`, it’s always a perfect square (`0` or `1`).
2. Use **binary search** on the range `[2, num/2]`:
   - Compute `mid = (left + right) / 2`.
   - Calculate `prod = mid * mid`.
   - If `prod == num`, return `true`.
   - If `prod > num`, move the search space to the left (`right = mid - 1`).
   - Otherwise, search the right half (`left = mid + 1`).
3. If the loop ends without finding an exact square, return `false`.

---

# Complexity

- **Time complexity:**  
  $$O(\log n)$$ — Binary search reduces the search space by half each step.
- **Space complexity:**  
  $$O(1)$$ — Only constant extra variables are used.

---

# Code

```javascript []
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num < 2) return true;
  let left = 2;
  let right = Math.floor(num / 2);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let prod = mid * mid;

    if (prod === num) {
      return true;
    } else if (prod > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
```
