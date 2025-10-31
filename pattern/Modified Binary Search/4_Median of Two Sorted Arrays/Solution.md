# Intuition

We are asked to find the median of two **sorted arrays** without merging them.  
If we merged them, it would take `O(m + n)` time — but the goal is to do better, ideally `O(log(min(m, n)))`.

The key idea is to use **binary search** on the smaller array to find a **partition** (split point) such that:

- The left half of both arrays combined contains smaller elements.
- The right half of both arrays combined contains larger elements.

When that happens, the median can be directly calculated from the edges of these halves.

---

# Approach

1. Ensure `nums1` is the **smaller array** (so binary search is efficient).
2. Perform binary search on `nums1`:
   - `partitionX` divides `nums1` into two halves.
   - `partitionY` divides `nums2` so that left + right halves are balanced in total size.
3. Calculate:
   - `maxLeftX`, `minRightX` → elements around the partition in `nums1`
   - `maxLeftY`, `minRightY` → elements around the partition in `nums2`
4. Check if the partitions are valid:
   - If `maxLeftX ≤ minRightY` **and** `maxLeftY ≤ minRightX`, we’ve found the correct partition.
     - If total length is even → median = average of the two middle values.
     - If odd → median = max of left half.
5. If not valid:
   - Move search **left** if `maxLeftX > minRightY`.
   - Move search **right** otherwise.

---

# Complexity

- **Time complexity:** `O(log(min(m, n)))` — binary search on the smaller array.
- **Space complexity:** `O(1)` — only uses a few variables.

---

# Code

```javascript []
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // Ensure nums1 is the smaller array
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  let m = nums1.length;
  let n = nums2.length;

  let low = 0,
    high = m;

  while (low <= high) {
    let partitionX = Math.floor((low + high) / 2);
    let partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    let maxLeftX =
      partitionX === 0 ? Number.MIN_SAFE_INTEGER : nums1[partitionX - 1];
    let minRightX =
      partitionX === m ? Number.MAX_SAFE_INTEGER : nums1[partitionX];

    let maxLeftY =
      partitionY === 0 ? Number.MIN_SAFE_INTEGER : nums2[partitionY - 1];
    let minRightY =
      partitionY === n ? Number.MAX_SAFE_INTEGER : nums2[partitionY];

    // Correct partition found
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((m + n) % 2 === 0) {
        return (
          (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
        );
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    }
    // Move left
    else if (maxLeftX > minRightY) {
      high = partitionX - 1;
    }
    // Move right
    else {
      low = partitionX + 1;
    }
  }
};
```

### ✅ Simple takeaway:

We split both arrays in such a way that the left half has all smaller numbers and the right half has all larger numbers, and then find the median from the edges.
