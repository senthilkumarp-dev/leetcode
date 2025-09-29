# Intuition
The problem is simply asking us to **add 1 to a number represented as an array of digits**.  
We need to handle cases where adding `1` causes a carry, e.g., `[9,9,9] → [1,0,0,0]`.  
This can be solved using recursion by processing digits from right to left.

---

# Approach
1. Start from the last digit with an initial carry of `1`.  
2. At each step:  
   - Add the carry to the current digit.  
   - Insert the result digit (`sum % 10`) at the beginning of the result array.  
   - Calculate the new carry (`Math.floor(sum / 10)`).  
3. Continue recursively until all digits are processed.  
4. If a carry remains after the first digit, add it to the front of the result.  
5. Return the result array.

---

# Complexity
- **Time complexity:** $$O(n)$$  
  We process each digit once.  
- **Space complexity:** $$O(n)$$  
  Result array + recursion stack in the worst case.

---

# Code
```javascript []
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let result = [];
    return helper(digits, digits.length - 1, 1, result);
};

var helper = function(digits, i, carry, result) {
    if (i < 0) {
        if (carry > 0) result.unshift(carry);
        return result;
    }

    let sum = digits[i] + carry;
    result.unshift(sum % 10);
    let nextCarry = Math.floor(sum / 10);

    return helper(digits, i - 1, nextCarry, result);
};
