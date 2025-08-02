# LeetCode 240: Search a 2D Matrix II

# Intuition

The matrix has two key properties:

1. Each **row** is sorted in ascending order from **left to right**.
2. Each **column** is sorted in ascending order from **top to bottom**.

If we start at the **top-right corner**:

- If the current number is **greater** than the target, we can move **left** (since everything below is even larger).
- If the current number is **smaller** than the target, we can move **down** (since everything to the left is smaller).

This method efficiently narrows down the search space.

# Approach

1. Start at the **top-right** corner: `row = 0`, `col = n - 1`.
2. While within matrix bounds:
   - If `matrix[row][col] == target`, return `true`.
   - If `matrix[row][col] > target`, move **left** (`col--`).
   - If `matrix[row][col] < target`, move **down** (`row++`).
3. If we exit the loop, the target is not in the matrix — return `false`.

# Complexity

- **Time complexity:** $$O(m + n)$$  
  At most, we move `m` steps down and `n` steps left.
- **Space complexity:** $$O(1)$$  
  We only use constant extra space.

# Code

```java []
class Solution {
    // Each row is sorted in ascending order left to right
    // Each column is sorted in ascending order top to bottom
    // We can use a smart approach starting from the top-right corner.
    public boolean searchMatrix(int[][] matrix, int target) {
        int m = matrix.length;
        int n = matrix[0].length;

        int row = 0;
        int col = n - 1;

        while (row < m && col >= 0) {
            int current = matrix[row][col];
            if (current == target) {
                return true;
            } else if (current > target) {
                col--;  // move left
            } else {
                row++;  // move down
            }
        }

        return false;
    }
}
```

```Python []
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m = len(matrix)
        n = len(matrix[0])

        row = 0
        col = n-1

        while row < m and col >=0 :
            current  = matrix[row][col]
            if current == target :
                return True
            elif current > target :
                col -=1
            else :
                row +=1
        return False
```

```Javascript []
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let row = 0;
  let col = n - 1;
  while (row < m && col >= 0) {
    let current = matrix[row][col];
    if (current == target) {
      return true;
    } else if (current > target) {
      col--;
    } else {
      row++;
    }
  }
  return false;
};

```
