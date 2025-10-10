# Intuition
This problem follows the same logic as the Fibonacci sequence.  
To reach the nth stair, you can either:
- Take **1 step** from the (n−1)th stair, or  
- Take **2 steps** from the (n−2)th stair.  
Hence, the total number of ways to reach the nth stair is the sum of the ways to reach (n−1) and (n−2).

---

# Approach
We use **tabulation (bottom-up dynamic programming)** to iteratively compute the result:
1. Create an array `db` where each index `i` represents the number of ways to reach step `i`.
2. Initialize:
   - `db[0] = 1` (one way to stay on the ground)
   - `db[1] = 1` (one way to reach the first step)
3. For each step `i` from 2 to `n`, compute:
   - `db[i] = db[i-1] + db[i-2]`
4. Return `db[n]` as the total number of distinct ways.

---

# Complexity
- **Time complexity:** $$O(n)$$ — Each step is computed once.  
- **Space complexity:** $$O(n)$$ — We store all computed values in an array.

---

# Code
```javascript []
var climbStairs = function(n) {
 // Tabulation way (bottom-up approach)
 let db = [];
 db[0] = 1; 
 db[1] = 1; 
 for (let i = 2; i <= n; i++) {
     db[i] = db[i - 1] + db[i - 2];
 }
 return db[n];
};
