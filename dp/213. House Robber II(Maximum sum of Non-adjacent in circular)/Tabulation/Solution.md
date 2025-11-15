# Intuition

This problem is an extension of the classic **House Robber** problem, with a twist —  
the houses are arranged **in a circle**, meaning the **first and last house are adjacent**.

Since we can’t rob two adjacent houses, we must handle the circular constraint carefully.  
If we rob the **first house**, we **can’t rob the last** — and vice versa.  
Thus, we split the problem into two simpler **linear cases** and choose the maximum result.

---

# Approach

1. **Handle edge case:**

   - If there’s only **one house**, return its value directly.

2. **Split into two scenarios:**

   - **Case 1:** Rob houses **excluding the first house** (index `0`).
   - **Case 2:** Rob houses **excluding the last house** (index `n - 1`).

3. **For each case, apply the classic House Robber DP logic:**

   - Use two variables:
     - `prev` → max amount robbed up to the previous house.
     - `prev2` → max amount robbed up to the house before the previous one.
   - For each house:
     - Either **take** the current house (`arr[i] + prev2`)  
       or **skip** it (`prev`).
     - Update the variables for the next iteration.

4. **Return the maximum value** between the two cases.

---

# Complexity

- **Time complexity:** `O(n)` — we traverse the houses once for each case.
- **Space complexity:** `O(1)` — uses only a few extra variables (space-optimized DP).

---

# Code

```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  let n = nums.length;
  let temp1 = [];
  let temp2 = [];

  // Split into two cases: exclude first or last
  for (let i = 0; i < n; i++) {
    if (i !== 0) temp1.push(nums[i]);
    if (i !== n - 1) temp2.push(nums[i]);
  }

  // Helper function for linear house robber
  let getMaxRob = (arr) => {
    let prev = arr[0];
    let prev2 = 0;
    for (let i = 1; i < arr.length; i++) {
      let take = arr[i];
      if (i > 1) take += prev2;
      let notTake = prev;
      let curr = Math.max(take, notTake);
      prev2 = prev;
      prev = curr;
    }
    return prev;
  };

  // Return max between two scenarios
  return Math.max(getMaxRob(temp1), getMaxRob(temp2));
};
```
