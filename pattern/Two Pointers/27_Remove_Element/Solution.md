# Intuition

The task is to remove all instances of a given value `val` from the array `nums` in-place and return the new length.  
Since the order of elements beyond the new length does not matter, we only need to **overwrite the unwanted elements** as we iterate.

---

# Approach

1. Maintain a pointer `k` that tracks the position where the next valid element (not equal to `val`) should be placed.
2. Traverse through the array:
   - If `nums[i] != val`, copy `nums[i]` to `nums[k]` and increment `k`.
   - If `nums[i] == val`, skip it.
3. After finishing, all valid elements will be in the first `k` positions of `nums`.
4. Return `k` as the new length.

---

# Complexity

- **Time complexity:**  
  $$O(n)$$ — we traverse the array once.

- **Space complexity:**  
  $$O(1)$$ — done in-place without extra data structures.

---

# Code

```Java []
class Solution {
    public int removeElement(int[] nums, int val) {
        int k=0;
        for(int i=0;i<nums.length;i++){
            if(nums[i]!=val){
                nums[k]=nums[i];
                k++;
            }
        }
        return k;
    }
}
```

```javascript []
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
```

```Python []
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k= 0
        for i in range(0,len(nums)):
            if(nums[i]!=val):
                nums[k]=nums[i]
                k+=1
        return k
```
