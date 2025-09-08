# Intuition

We need to move all zeroes to the end of the array while maintaining the relative order of the non-zero elements.  
A simple way is to use a **two-pointer technique**:

- One pointer (`right`) scans the array.
- Another pointer (`left`) keeps track of the position to place the next non-zero element.

---

# Approach

1. Initialize two pointers:
   - `left = 0` → the index where the next non-zero element should be placed.
   - `right` → iterates through the array.
2. For each `nums[right]`:
   - If it’s non-zero, **swap** it with `nums[left]` and move `left` forward.
   - If it’s zero, just continue.
3. This way, all non-zero elements are shifted to the left in order, and all zeros get pushed to the end.

---

# Complexity

- **Time complexity:**  
  $$O(n)$$ — we traverse the array once.

- **Space complexity:**  
  $$O(1)$$ — in-place swapping without extra space.

---

# Code

```java []
class Solution {
    public void moveZeroes(int[] nums) {
        int left = 0;
        for (int right = 0; right < nums.length; right++) {
            if (nums[right] != 0) {
                int temp = nums[right];
                nums[right] = nums[left];
                nums[left] = temp;
                left++;
            }
        }
    }
}
```

```Javascript []
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let count = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] != 0) {
      [nums[count], nums[right]] = [nums[right], nums[count]];
      count++;
    }
  }
};

```
