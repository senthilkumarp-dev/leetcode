# Intuition
In a sorted array where every element appears exactly twice except one, the duplicate pairs always occupy **even–odd indices** (e.g., index `0` with `1`, index `2` with `3`, etc.).  
If this property breaks at some point, the single element lies in that half of the array.

---

# Approach
1. Use **binary search**:
   - Compute `mid = (l + r) / 2`.
   - Ensure `mid` is even (so we always compare pairs correctly).  
     If `mid` is odd, decrement it by 1.
2. Check if `nums[mid] == nums[mid + 1]`:
   - If true → the single element is on the **right half** (`l = mid + 2`).
   - Otherwise → the single element is on the **left half** (`r = mid`).
3. Continue until `l == r`.  
   At this point, `nums[l]` is the single non-duplicate element.

---

# Complexity
- **Time complexity:**  
  $$O(\log n)$$ — Binary search halves the search space each step.  

- **Space complexity:**  
  $$O(1)$$ — Only constant extra space is used.  

---

# Code
``` java []
class Solution {
    public int singleNonDuplicate(int[] nums) {
        int left  = 0;
        int right = nums.length-1;
        while(left < right){
            int mid = (left+right)/2;
            if( mid%2 == 1 ){
                mid--;
            }
            if(nums[mid]==nums[mid+1]){
                left=mid+2;
            }
            else{
                right = mid;
            }
        }
        return nums[left];
    }
}
```
``` javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let mid = Math.floor((l + r) / 2);

        // Make sure mid is even for pair comparison
        if (mid % 2 === 1) {
            mid--;
        }

        if (nums[mid] === nums[mid + 1]) {
            l = mid + 2; // single is in the right half
        } else {
            r = mid;     // single is in the left half
        }
    }
    return nums[l];
};
```
``` python []
class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        left = 0
        right = len(nums)-1
        while left < right:
            mid = (left+right)//2
            if mid%2==1:
                mid = mid -1
            if nums[mid]==nums[mid+1]:
                left = mid+2
            else:
                right = mid
        return nums[left]
```
