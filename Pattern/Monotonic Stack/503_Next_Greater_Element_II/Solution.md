# 503. Next Greater Element II

## Problem
Given a circular integer array `nums` (i.e., the next element of `nums[nums.length - 1]` is `nums[0]`), return the **next greater number** for every element in `nums`.

The next greater number of a number `x` is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return `-1` for that number.

**Example 1:**
Input: nums = [1,2,1]  
Output: [2,-1,2]  

**Example 2:**
Input: nums = [5,4,3,2,1]  
Output: [-1,5,5,5,5]  

---

# Intuition
For each element, we want to find the first greater element on its right, considering the array is circular.  
A brute force approach would check all elements to the right (and wrap around), but that would be $$O(n^2)$$.  

We can do better using a **monotonic stack**:  
- Keep a stack of indices where the "next greater element" hasn't been found yet.  
- As we traverse, if the current number is greater than the element at the top of the stack, we’ve found its next greater element.  

---

# Approach
1. Initialize a result array with `-1` (default: no greater element).  
2. Use a stack to store indices of elements in decreasing order.  
3. Traverse the array **twice (2 * n iterations)** to simulate circular behavior.  
   - At each step, compare the current number with the top of the stack.  
   - If the current number is greater, update the result for the popped index.  
   - Push indices only during the **first pass** (0..n-1).  
4. Return the result array.  

---

# Complexity
- **Time complexity:**  
  $$O(n)$$ — each element is pushed and popped from the stack at most once.  
- **Space complexity:**  
  $$O(n)$$ — stack and result array.  

---

# Code
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length;
    const res = Array(n).fill(-1);   // default: no greater element
    const stack = [];                // stack stores indices

    // Traverse twice to simulate circular array
    for (let i = 0; i < 2 * n; i++) {
        const num = nums[i % n];     // current element in circular traversal

        // While current num is greater than the top of stack → update result
        while (stack.length && nums[stack[stack.length - 1]] < num) {
            const idx = stack.pop();
            res[idx] = num;
        }

        // Only push indices from first pass (0..n-1)
        if (i < n) {
            stack.push(i);
        }
    }
    return res;
};

