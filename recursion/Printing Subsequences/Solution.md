# Print All Subsequences of an Array

## Problem

Given an array of integers, print all possible subsequences (subsets where order of elements is preserved).

Example:  
Input: `[3, 1, 2]`  
Output (order may vary):

---

# Intuition

At each index, we have **two choices**:

1. **Exclude** the current element → move to next index.
2. **Include** the current element → add it to the subsequence and move forward.

By recursively applying this choice at every index, we cover all possible subsequences.

---

# Approach

1. Define a recursive function `printSubSeq(idx, ds, arr, n)` where:

   - `idx` = current index,
   - `ds` = current subsequence (list),
   - `arr` = input array,
   - `n` = length of array.

2. Base case:

   - If `idx >= n`, print the current subsequence `ds` and return.

3. Recursive case:
   - **Exclude case:** Call recursion without adding `arr[idx]`.
   - **Include case:** Add `arr[idx]` to `ds`, call recursion, then remove it (backtracking).

---

# Complexity

- **Time complexity:**  
  Each element has 2 choices (include/exclude), so total subsequences = $$2^n$$.  
  Printing each subsequence takes up to `O(n)`.  
  **Overall = O((2^n) \* n)**.

- **Space complexity:**  
  $$O(n)$$ — recursion depth and temporary subsequence storage.

---

# Code

```javascript
function printSubSeq(idx, ds, arr, n) {
  if (idx >= n) {
    console.log(ds);
    return;
  }

  // Exclude current element
  printSubSeq(idx + 1, ds, arr, n);

  // Include current element
  ds.push(arr[idx]);
  printSubSeq(idx + 1, ds, arr, n);

  // Backtrack
  ds.pop();
}

let arr = [3, 1, 2];
let n = arr.length;
printSubSeq(0, [], arr, n);
```
