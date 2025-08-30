# 724. Find Pivot Index

## Problem

Given an array of integers `nums`, calculate the **pivot index** of this array.

The pivot index is the index where the sum of all the numbers **strictly to the left** of the index is equal to the sum of all the numbers **strictly to the right** of the index.

If the index is on the left edge of the array, then the left sum is 0.  
If the index is on the right edge of the array, then the right sum is 0.

Return the **leftmost pivot index**. If no such index exists, return `-1`.

---

**Example 1:**  
Input: nums = [1,7,3,6,5,6]  
Output: 3

**Example 2:**  
Input: nums = [1,2,3]  
Output: -1

**Example 3:**  
Input: nums = [2,1,-1]  
Output: 0

---

# Intuition

We want to find an index `i` where the sum of elements on the left equals the sum of elements on the right.

Instead of recalculating left and right sums for every index (which would be inefficient), we can use:

- **Total sum** of the array
- **Left sum** while iterating

Then, for each index:  
`Right sum = Total sum - Left sum - nums[i]`

If `Left sum == Right sum`, we’ve found the pivot index.

---

# Approach

1. Compute the total sum of the array.
2. Initialize `leftTotal = 0`.
3. Traverse the array:
   - Compute `rightTotal = total - leftTotal - nums[i]`.
   - If `leftTotal == rightTotal`, return the current index `i`.
   - Otherwise, update `leftTotal += nums[i]`.
4. If no index satisfies the condition, return `-1`.

---

# Complexity

- **Time complexity:**  
  $$O(n)$$ — one pass to compute total sum, one pass to find pivot.
- **Space complexity:**  
  $$O(1)$$ — only a few variables used.

---

# Code

```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let total = nums.reduce((total, num) => total + num, 0);
  let leftTotal = 0;

  for (let i = 0; i < nums.length; i++) {
    let rightTotal = total - leftTotal - nums[i];
    if (leftTotal === rightTotal) {
      return i;
    }
    leftTotal += nums[i];
  }
  return -1;
};
```

```Java []
class Solution {
    public int pivotIndex(int[] nums) {
        int leftTotal = 0;
        int total = 0;
        for(int num : nums){
            total+=num;
        }
        for(int i = 0 ; i < nums.length ; i++){
            int rightTotal  = total - leftTotal - nums[i];
            if(rightTotal == leftTotal){
                return i ;
            }
            leftTotal+=nums[i];
        }
        return -1;
    }
}
```

```python []
class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        total = sum(nums)
        left_total = 0
        for i in range(0,len(nums)):
            right_total = total - left_total - nums[i]
            if left_total == right_total:
                return i
            left_total+=nums[i]
        return -1
```
