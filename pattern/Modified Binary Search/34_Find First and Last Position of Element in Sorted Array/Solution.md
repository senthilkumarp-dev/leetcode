# Intuition

We need to find the **starting and ending position** of a given target value in a sorted array.  
A normal binary search can only find **one occurrence** of the target, but since the array is sorted, we can extend binary search to find the **leftmost (first)** and **rightmost (last)** occurrences.

---

# Approach

1. Perform two modified binary searches:
   - One with a **left bias** to find the first occurrence of `target`.
   - One with a **right bias** to find the last occurrence of `target`.
2. In each binary search:
   - If `nums[mid] < target`, move search space to the right (`l = mid + 1`).
   - If `nums[mid] > target`, move search space to the left (`r = mid - 1`).
   - If `nums[mid] == target`, record the index:
     - For **left bias**, continue searching left (`r = mid - 1`).
     - For **right bias**, continue searching right (`l = mid + 1`).
3. Return the pair `[firstIndex, lastIndex]`.  
   If the target doesn’t exist, both will be `-1`.

---

# Complexity

- **Time complexity:**  
  $$O(\log n)$$ — Each binary search runs in logarithmic time, and we perform it twice.

- **Space complexity:**  
  $$O(1)$$ — Only constant extra space is used.

---

# Code

```javascript []
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = binarySearch(nums, target, true);
  let right = binarySearch(nums, target, false);
  return [left, right];
};

function binarySearch(nums, target, leftBias) {
  let l = 0;
  let r = nums.length - 1;
  let i = -1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      i = mid;
      if (leftBias) {
        r = mid - 1; // keep searching left
      } else {
        l = mid + 1; // keep searching right
      }
    }
  }
  return i;
}
```
