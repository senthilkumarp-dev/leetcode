# LeetCode 153: Find Minimum in Rotated Sorted Array

# Intuition

A rotated sorted array is originally sorted in ascending order but then rotated at some pivot.  
Example: `[4,5,6,7,0,1,2]` is a rotation of `[0,1,2,4,5,6,7]`.

The **minimum** element is the **rotation point**.  
Since the array is sorted in two parts, we can use **binary search** to efficiently locate the minimum.

# Approach

1. Set two pointers: `left = 0` and `right = nums.length - 1`.
2. Use a **binary search** loop while `left < right`:
   - Compute `mid = left + (right - left) / 2`.
   - If `nums[mid] > nums[right]`, the minimum must be **right of mid**, so set `left = mid + 1`.
   - Else, the minimum is **at mid or left of mid**, so set `right = mid`.
3. When the loop ends, `left` will point to the minimum element.
4. Return `nums[left]`.

# Complexity

- **Time complexity:** $$O(\log n)$$  
  Binary search halves the search space each time.
- **Space complexity:** $$O(1)$$  
  Only a few variables are used.

# Code

```java []
class Solution {
    public int findMin(int[] nums) {
        int left = 0;
        int right = nums.length - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] > nums[right]) {
                // Minimum must be to the right of mid
                left = mid + 1;
            } else {
                // Minimum is at mid or to the left
                right = mid;
            }
        }
        return nums[left]; // 'left' points to the minimum element
    }
}
```

```Python []
class Solution:
    def findMin(self, nums: List[int]) -> int:
        left  =  0
        right = len(nums)-1
        while left < right :
            mid  =  left + ((right -  left)//2)
            if(nums[mid] > nums[right]) :
                left = mid + 1
            else :
                right  = mid
        return nums[left]
```

```Javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};
```
