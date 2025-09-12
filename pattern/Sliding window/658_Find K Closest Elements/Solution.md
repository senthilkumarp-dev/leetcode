# Intuition
We want the `k` numbers closest to `x` in a sorted array. Instead of checking all numbers, we can use binary search to find the best starting point for the `k`-sized window.

---

# Approach
1. Set two pointers `l = 0` and `r = arr.length - k`.  
2. Use binary search to decide the window:
   - Compare distance of `x` from `arr[m]` (left edge) and `arr[m + k]` (right edge).  
   - If `x` is closer to the right side, move `l` right. Otherwise, move `r` left.  
3. When binary search ends, `l` is the starting index.  
4. Return `arr.slice(l, l + k)`.

---

# Complexity
- **Time:** $$O(\log(n-k) + k)$$  
- **Space:** $$O(1)$$

---

# Code
```javascript []
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let l = 0;
    let r = arr.length - k;

    while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (x - arr[m] > arr[m + k] - x) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return arr.slice(l, l + k);
};
