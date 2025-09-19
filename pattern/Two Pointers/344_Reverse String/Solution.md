# Intuition

We need to reverse the characters in the array `s` **in-place** (without using extra space for another array).  
A natural way to do this is by swapping characters from both ends until the middle is reached.

---

# Approach

1. Use two pointers:
   - `left` starts at the beginning of the array.
   - `right` starts at the end of the array.
2. Swap the characters at `left` and `right`.
3. Move `left` forward and `right` backward.
4. Repeat until `left` crosses `right`.

This ensures all characters are reversed in place.

---

# Complexity

- **Time complexity:** $$O(n)$$  
  Each character is visited/swapped at most once.

- **Space complexity:** $$O(1)$$  
  Only a few extra variables are used.

---

# Code

```javascript []
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};
```

```Java []
class Solution {
    public void reverseString(char[] s) {
        int left = 0;
        int right =  s.length - 1;
        while(left < right){
            char c = s[left];
            s[left] = s[right];
            s[right] = c ;
            left++;
            right--;
        }
    }
}
```
``` python []
class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        l = 0
        r = len(s) - 1
        while l < r:
            temp = s[l]
            s[l] = s [r]
            s[r] = temp
            l+=1
            r-=1
```
