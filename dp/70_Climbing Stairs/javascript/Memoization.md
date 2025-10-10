# Intuition
This problem is similar to the Fibonacci sequence.  
To reach the nth step, you can either:
- Climb **1 step** from the (n−1)th step, or  
- Climb **2 steps** from the (n−2)th step.  
Hence, the total ways to reach step `n` is the sum of the ways to reach `(n−1)` and `(n−2)`.

---

# Approach
We use **recursion with memoization** to avoid recomputation:
1. Define a helper function `countWay(n)` that returns the number of ways to reach step `n`.
2. Base cases:
   - If `n == 0` or `n == 1`, return 1.
3. Use an array `db` to store precomputed results.
4. Each call computes `countWay(n-1) + countWay(n-2)` and stores it in `db[n]`.
5. Return `countWay(n)` as the final answer.

---

# Complexity
- **Time complexity:** $$O(n)$$ — Each state (step) is computed once due to memoization.  
- **Space complexity:** $$O(n)$$ — For recursion stack and memoization array.

---

# Code
```javascript []
var climbStairs = function(n) {
    // Memoization array to store intermediate results
    let db = Array(n + 1).fill(-1);
    
    function countWay(n) {
        if (n == 0 || n == 1) return 1;
        if (db[n] !== -1) return db[n];
        db[n] = countWay(n - 1) + countWay(n - 2);
        return db[n];
    }

    return countWay(n);
};
