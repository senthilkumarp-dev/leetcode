# Intuition

We need to find the first occurrence of `needle` inside `haystack`.  
A simple way is to try each possible starting position in `haystack` and check if the substring matches `needle`.

---

# Approach

1. Loop through each index `i` of `haystack`.
2. If the current character matches the first character of `needle`, check further:
   - Compare characters one by one using another pointer.
   - If all characters match, return the starting index `i`.
3. If no match is found after checking all positions, return `-1`.

---

# Complexity

- **Time complexity:** $$O((n - m + 1) \times m)$$  
  where `n` = length of `haystack`, `m` = length of `needle`.  
  Worst case: compare `m` characters at each of the `n` positions.

- **Space complexity:** $$O(1)$$  
  No extra space used apart from variables.

---

# Code

```javascript []
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let idx = i;
      let j = 0;
      while (j < needle.length && idx < haystack.length) {
        if (haystack[idx] !== needle[j]) {
          break;
        }
        j++;
        idx++;
        if (j === needle.length) {
          return i;
        }
      }
    }
  }
  return -1;
};
```
``` Python []
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        n = len(haystack)
        m = len(needle)
        for i in range (0 , n):
            if haystack[i] == needle[0]:
                k = i
                j = 0
                while k < n and j < m:
                    if haystack[k] != needle[j]:
                        break
                    j+=1
                    k+=1
                if j == m:
                    return i
        return -1
```