# Intuition
We want to remove duplicate letters so that each character appears only once, and the resulting string is the smallest in lexicographical order.  
This suggests we need a **greedy + stack** approach:
- Always keep the lexicographically smallest character possible.
- Ensure each character appears only once.
- If a character appears later, we may remove it earlier if it helps form a smaller string.

---

# Approach
1. **Record last occurrence:**  
   Store the last index of each character in `lastIndex`. This helps decide whether a character can be safely removed, knowing it appears again later.

2. **Use a stack + visited set:**  
   - Iterate through each character `c` in `s`.  
   - If `c` is already visited, skip it (since we only want one copy).  
   - Otherwise, check the top of the stack:  
     - While the top is lexicographically larger than `c` **and** it appears again later (`lastIndex[top] > i`), pop it out (to maintain lexicographical order).  
   - Add `c` to the stack and mark it visited.  

3. **Build result:**  
   Join all characters in the stack to form the final string.

---

# Complexity
- **Time complexity:** $$O(n)$$  
  Each character is pushed and popped at most once.  

- **Space complexity:** $$O(n)$$  
  For the stack, `visited` set, and `lastIndex` map.

---

# Code
```javascript []
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let lastIndex = {};
    let visited = new Set();
    let stack = [];

    // Store last occurrence of each character
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }

    for (let i = 0; i < s.length; i++) {
        let c = s[i];

        if (visited.has(c)) continue;

        // Ensure lexicographical order by popping larger chars
        while (
            stack.length > 0 &&
            stack[stack.length - 1] > c &&
            lastIndex[stack[stack.length - 1]] > i
        ) {
            visited.delete(stack.pop());
        }

        visited.add(c);
        stack.push(c);
    }

    return stack.join('');
};
