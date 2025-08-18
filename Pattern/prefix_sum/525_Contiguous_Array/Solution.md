# 525. Contiguous Array

## Problem
Given a binary array `nums`, return the maximum length of a contiguous subarray with an equal number of `0` and `1`.

**Example 1:**
Input: nums = [0,1]  
Output: 2  

**Example 2:**
Input: nums = [0,1,0]  
Output: 2  

---

# Intuition
The problem is about finding the longest subarray where the count of `0`s and `1`s is equal.  
If we treat `0` as `-1`, then the problem becomes finding the longest subarray with **sum = 0**.  

This is a classic prefix sum + hashmap problem.

---

# Approach
1. Replace every `0` in the array with `-1`.  
   - This way, equal numbers of `0`s and `1`s translate into a **prefix sum of 0** over that subarray.
2. Use a running `sum` to track the cumulative total.
3. Use a hashmap (`presum`) to store the **first index** where each prefix sum occurs.
   - Initialize `presum` with `{0: -1}` to handle cases where the subarray starts at index `0`.
4. For each index:
   - Update the prefix sum.
   - If the sum has been seen before, calculate the length of the subarray between the current index and the stored index.
   - Update the result with the maximum length.
   - If the sum is new, store the current index in the hashmap.
5. Return the maximum length.

---

# Complexity
- **Time complexity:**  
  $$O(n)$$ — we traverse the array once.  
- **Space complexity:**  
  $$O(n)$$ — for storing prefix sums in the hashmap.  

---

# Code
``` Java []
class Solution {
    public int findMaxLength(int[] nums) {
        int[] preSum = new int[nums.length + 1];
        Map<Integer, Integer> sumToIdx = new HashMap<>();
        preSum[0]=0;
        sumToIdx.put(preSum[0], 0);
        for(int i =0 ; i < nums.length ; i++){
            if(nums[i]==0){
                nums[i]= -1;
            }
        }
       int max = 0;
        for(int i = 1 ; i < nums.length+1 ; i++){
            preSum[i]=preSum[i-1]+nums[i-1];
            if(sumToIdx.containsKey(preSum[i])){
                int idx = sumToIdx.get(preSum[i]);
                max = Math.max(max , i - idx);
            }
            else{
                sumToIdx.put(preSum[i],i);
            }
        }

        return max;
    }
}
```
``` Python []
class Solution(object):
    def findMaxLength(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        result = 0
        currentSum = 0
        sumDict = {0: -1}  # Important: base case to handle sum == 0

        for i in range(len(nums)):
            if nums[i] == 0:
                nums[i] = -1

            currentSum += nums[i]

            if currentSum in sumDict:
                subArrLen = i - sumDict[currentSum]
                result = max(result, subArrLen)
            else:
                sumDict[currentSum] = i
        return result
```
``` javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let sum = 0;
    let presum = new Map();
    let res = 0;
    presum.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums[i] = -1;
        }
        sum += nums[i];
        if (presum.has(sum)) {
            res = Math.max(res, i - presum.get(sum));
        } else {
            presum.set(sum, i);
        }
    }
    return res;
};

