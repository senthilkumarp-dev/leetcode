# Intuition

We need to check whether string `s` is a subsequence of string `t`.  
A subsequence means all characters of `s` should appear in `t` in the same order, but not necessarily contiguously.  
This can be done using a **two-pointer technique**.

---

# Approach

1. Use two pointers:
   - `j` → points to current character in `s`.
   - `i` → points to current character in `t`.
2. Traverse `t` from left to right:
   - If characters `s[j]` and `t[i]` match, move `j` to the next character in `s`.
   - Always move `i` forward.
3. If `j` reaches the end of `s`, it means all characters of `s` were found in order → return `true`.
4. Otherwise, return `false`.

---

# Complexity

- **Time complexity:** $$O(n)$$  
  where `n` is the length of string `t` (since we scan it once).

- **Space complexity:** $$O(1)$$  
  We only use a few variables.

---

# Code

```java []
class Solution {
    public boolean isSubsequence(String s, String t) {
        if (s.length() == 0) return true;
        int i = 0;
        int j = 0;
        while (i < t.length() && j < s.length()) {
            if (s.charAt(j) == t.charAt(i)) {
                j++;
            }
            if (j == s.length()) {
                return true;
            }
            i++;
        }
        return false;
    }
}
```

```Javascript []
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    while(i<t.length && j < s.length){
        if(s[j]==t[i]){
            j++;
        }
        i++;
    }
    if(j == s.length){
        return true;
    }
    return false;
};
```
