# Intuition

The Fibonacci sequence is a classic problem where each number is the sum of the two preceding ones.  
A direct recursive approach works but is inefficient due to repeated calculations.  
To optimize, we can use an **iterative approach** that stores only the last two computed values.

---

# Approach

1. **Base cases:**
   - If `n < 2`, simply return `n` (since `fib(0) = 0` and `fib(1) = 1`).
2. **Iterative computation:**
   - Initialize two variables, `prev1 = 1` and `prev2 = 0`.
   - For each iteration from `2` to `n`, compute `curr = prev1 + prev2`.
   - Update the previous values for the next step.
3. **Return the final value of `prev1`**, which represents `fib(n)`.

---

# Complexity

- **Time complexity:** $$O(n)$$ — We iterate through all values up to `n` once.
- **Space complexity:** $$O(1)$$ — Only a constant number of variables are used.

---

# Code

```javascript []
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) {
    return n;
  }
  let prev1 = 1;
  let prev2 = 0;
  for (let i = 2; i <= n; i++) {
    let curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
};
```
``` java []
class Solution {
    public int fib(int n) {
        if(n<2){
            return n;
        }
        int prev1 = 1;
        int prev2 = 0;
        for(int i = 2; i <= n;i++){
            int curr =  prev1+prev2;
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }
}
```
