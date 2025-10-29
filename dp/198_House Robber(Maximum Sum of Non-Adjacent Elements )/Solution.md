# Intuition

The problem is a variation of the **maximum non-adjacent sum** problem.  
You are a thief trying to rob houses along a street — each house has some money, but you **cannot rob two adjacent houses** because of the security system.  
So the goal is to find the **maximum sum of non-adjacent elements** in the array.

---

# Approach

### 🧠 Approach 1: Memoization (Top-Down DP)

1. Use recursion to decide for each index `i`:
   - Either **rob** the current house and skip the previous one (`nums[i] + helper(i - 2)`),
   - Or **skip** the current house (`helper(i - 1)`).
2. Store the results in a `dp` array to avoid recomputation (memoization).
3. Return the maximum of both choices.

---

### ⚡ Approach 2: Tabulation (Bottom-Up DP / Space Optimization)

1. Start from the first two houses — initialize:
   - `prev2 = nums[0]`
   - `prev1 = max(nums[0], nums[1])`
2. For each next house `i`:
   - If we rob it → add `nums[i]` + `prev2`
   - If we skip it → take `prev1`
   - Keep updating these two variables as we iterate.
3. Finally, `prev1` holds the maximum amount we can rob.

---

# Complexity

- **Time complexity:** `O(n)` — one pass through the houses.
- **Space complexity:**
  - Memoization → `O(n)` for recursion + DP array.
  - Tabulation → `O(1)` using only two variables.

---

# Code (Memoization)

```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = new Array(nums.length).fill(-1);

  let helper = (i) => {
    if (i == 0) return nums[i];
    if (i < 0) return 0;

    if (dp[i] != -1) {
      return dp[i];
    }

    let pick = nums[i] + helper(i - 2);
    let unpick = helper(i - 1);

    dp[i] = Math.max(pick, unpick);
    return dp[i];
  };

  return helper(nums.length - 1);
};
```

# Code (Tabulation / Space Optimized)

```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length == 1) {
    return nums[0];
  }

  let prev2 = nums[0];
  let prev1 = Math.max(nums[1], nums[0]);

  for (let i = 2; i < nums.length; i++) {
    let pick = nums[i] + prev2;
    let unpick = prev1;
    let curr = Math.max(pick, unpick);
    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
};
```
