# 869. Reordered Power of 2

## Problem

You are given an integer `n`.  
We reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return `true` if and only if we can do this so that the resulting number is a power of two.

**Example 1:**  
Input: n = 1  
Output: true

**Example 2:**  
Input: n = 10  
Output: false

**Constraints:**

- `1 <= n <= 10^9`

---

# Intuition

A power of two has a very specific set of digits in its decimal representation.  
If we reorder the digits of `n`, the only way for it to become a power of two is if the **sorted digits** match the sorted digits of some power of two.

Example:  
n = 128 → sorted = "128"  
2^7 = 128 → sorted = "128" → match ✅

If the sorted strings are equal, the numbers are permutations of each other.

---

# Approach

1. Convert `n` into a sorted string representation (`sortedString(n)`).
2. Iterate over all powers of two from `2^0` to `2^30` (since `2^30 = 1,073,741,824` is within integer range).
3. For each power of two:
   - Convert it to a sorted string.
   - Compare it with the sorted string of `n`.
4. If any match is found, return `true`.
5. If no matches after the loop, return `false`.

---

# Complexity

- **Time complexity:**  
  Sorting a number's digits takes $$O(d \log d)$$, where `d` is the number of digits (≤ 10 for int range).  
  We check at most 31 powers of two.  
  Overall: $$O(31 \cdot d \log d) \approx O(1)$$ for int range.
- **Space complexity:**  
  $$O(d)$$ for storing the digit arrays.

---

# Code

```java
class Solution {
    public boolean reorderedPowerOf2(int n) {
        String target = sortedString(n);
        for (int i = 0; i < 31; i++) {
            if (sortedString(1 << i).equals(target)) {
                return true;
            }
        }
        return false;
    }

    public String sortedString(int n) {
        char[] arr = String.valueOf(n).toCharArray();
        Arrays.sort(arr);
        return new String(arr);
    }
}
```

```python []
class Solution:
    def reorderedPowerOf2(self, n: int) -> bool:
        def sorted_string(n):
            return ''.join(sorted(str(n)))
        target = sorted_string(n)
        for i in range(0,31):
            if sorted_string(1 << i) == target:
                return True
        return False
```

```javascript []
/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
  let target = sortedString(n);
  for (let i = 0; i < 31; i++) {
    if (sortedString(1 << i) == target) {
      return true;
    }
  }
  return false;
};
function sortedString(n) {
  return String(n).split("").sort().join("");
}
```
