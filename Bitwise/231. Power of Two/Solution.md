# 231. Power of Two

## Problem Statement
Given an integer `n`, return:
- `true` if `n` is a **power of two**.
- `false` otherwise.

A number is a **power of two** if:
n = 2^x, where x is a non-negative integer
# Intuition
In binary form, powers of two have a unique property — they contain **exactly one `1` bit** and all other bits are `0`.  
Example:  
1 -> 0001
2 -> 0010
4 -> 0100
8 -> 1000
If we subtract `1` from a power of two, all bits after the single `1` become `1`s, and the `1` itself becomes `0`.  
This means for any power of two `n`:
and `n` must be positive.

# Approach
1. Check if `n` is **positive**.  
2. Use the bitwise trick:  
   - `(n & (n - 1)) == 0` is `true` only for powers of two.  
3. Return the boolean result of both conditions.

# Complexity
- Time complexity:  
  $$O(1)$$ — constant-time bitwise operations.

- Space complexity:  
  $$O(1)$$ — no extra memory used.

# Code
```java []
class Solution {
    public boolean isPowerOfTwo(int n) {
        return n > 0 && (n & (n - 1)) == 0;
    }
}
```
``` Python []
class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        return n > 0 and (n & (n-1) == 0)
```
``` Javascript []
const isPowerOfTwo = n => n > 0 && !(n & (n-1))
        
```



