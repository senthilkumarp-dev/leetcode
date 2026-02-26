# Intuition

We can pick exactly `k` cards from either the **start** or the **end** of the array.

Instead of trying all combinations, notice:

If we take `i` cards from the left,  
then we must take `k - i` cards from the right.

So we:

- First take all `k` cards from the left
- Then gradually shift one card at a time from left → right
- Keep track of the maximum total

This avoids checking all possibilities explicitly.

---

# Approach

1. Compute the sum of the first `k` elements → `lsum`
2. Initialize:
   - `rsum = 0`
   - `maxsum = lsum`
3. Start shifting:
   - Remove one element from left sum
   - Add one element from right side
   - Update maximum
4. Return `maxsum`

This effectively tries all possible splits of `k` cards between left and right.

---

# Complexity

- **Time complexity:** `O(k)`  
  We only iterate `k` times.
- **Space complexity:** `O(1)`  
  Only a few variables are used.

---

# Code

```javascript
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let lsum = 0;
  let rsum = 0;
  let maxsum = 0;

  // Take first k elements from left
  for (let i = 0; i < k; i++) {
    lsum += cardPoints[i];
  }

  maxsum = lsum;

  let right = cardPoints.length - 1;

  // Shift from left to right
  for (let i = k - 1; i >= 0; i--) {
    lsum -= cardPoints[i];
    rsum += cardPoints[right--];
    maxsum = Math.max(maxsum, lsum + rsum);
  }

  return maxsum;
};
```
