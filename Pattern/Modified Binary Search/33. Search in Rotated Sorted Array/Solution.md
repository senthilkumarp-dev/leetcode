# Intuition

When a sorted array is rotated, it is no longer entirely sorted, but **at least one half of the array will always be sorted**. Using this property, we can apply a **modified binary search** to efficiently find the target.

# Approach

1. Start with two pointers: `left` at the beginning and `right` at the end of the array.
2. Calculate the middle index `mid`.
3. If `nums[mid] == target`, return `mid`.
4. Determine which half of the array is sorted:
   - If `nums[left] <= nums[mid]`, the **left half is sorted**.
     - If `target` lies within this range (`nums[left] <= target < nums[mid]`), search the left half (`right = mid - 1`).
     - Otherwise, search the right half (`left = mid + 1`).
   - Else, the **right half is sorted**.
     - If `target` lies within this range (`nums[mid] < target <= nums[right]`), search the right half (`left = mid + 1`).
     - Otherwise, search the left half (`right = mid - 1`).
5. Repeat until `left > right`.
6. If the loop ends, return `-1` since the target is not in the array.

# Complexity

- **Time complexity:**  
  $$O(\log n)$$  
  Because we reduce the search space by half in each step, similar to classic binary search.

- **Space complexity:**  
  $$O(1)$$  
  We use only a constant amount of extra space.

# Code

```python []
from typing import List

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1

        while left <= right:
            mid = left + (right - left) // 2

            if nums[mid] == target:
                return mid

            # Check if left half is sorted
            if nums[left] <= nums[mid]:
                if nums[left] <= target < nums[mid]:
                    right = mid - 1
                else:
                    left = mid + 1
            # Right half is sorted
            else:
                if nums[mid] < target <= nums[right]:
                    left = mid + 1
                else:
                    right = mid - 1

        return -1
```

```java []
class Solution {
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length-1;

        while(left <= right) {
            int mid = left + (right - left)/2;

            if(nums[mid] == target){
                return mid;
            }

            if(nums[left] <= nums[mid]){
                if(nums[left] <= target && target < nums[mid]){
                    right = mid-1;
                }
                else{
                    left = mid+1;
                }
            }
            else{
                if(nums[mid] < target && target <= nums[right]){
                    left = mid+1;
                }
                else{
                    right = mid-1;
                }
            }
        }
        return -1;
    }
}
```

```javascript []
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] == target) {
      return mid;
    } else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
```
