# 162. Find Peak Element

## Problem
A peak element is an element that is strictly greater than its neighbors.  
Given an array `nums`, find a peak element and return its index.  

- The array may contain multiple peaks; return any of them.  
- You may imagine that `nums[-1] = -∞` and `nums[n] = -∞`.  
- You must write an algorithm that runs in **O(log n)** time.  

---

# Intuition
We need to find a local maximum.  
A **binary search** works here because:  
- If `nums[mid] > nums[mid+1]`, then the peak lies **on the left side** (including mid).  
- If `nums[mid] < nums[mid+1]`, then the peak lies **on the right side**.  

Eventually, the search space shrinks until `left == right`, which must be a peak.  

---

# Approach
1. Initialize two pointers:  
   - `left = 0`  
   - `right = nums.length - 1`  

2. While `left < right`:  
   - Compute `mid = left + (right - left) // 2`.  
   - If `nums[mid] > nums[mid+1]`, the peak lies **left**, so set `right = mid`.  
   - Else, the peak lies **right**, so set `left = mid + 1`.  

3. When the loop ends, `left == right`, and that index is a peak.  

---

# Complexity
- **Time complexity:**  
  $$O(\log n)$$ — binary search halves the search space each step.  

- **Space complexity:**  
  $$O(1)$$ — only pointers are used.  

---

# Code
``` java []
class Solution {
    public int findPeakElement(int[] nums) {
             int left = 0, right = nums.length - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] > nums[mid + 1]) {
                // You're on the descending slope, so the peak is on the left (including mid)
                right = mid;
            } else {
                // You're on the ascending slope, so the peak is on the right
                left = mid + 1;
            }
        }

        // left == right is the peak position
        return left;   
    }
}
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        
        if (nums[mid] > nums[mid + 1]) {
            right = mid; // peak is at mid or to the left
        } else {
            left = mid + 1; // peak must be to the right
        }
    }
    
    return left;
};
