# Intuition

We are given a grid with guards and walls.  
Each guard can watch cells **horizontally and vertically** until a wall or another guard blocks their view.  
Our task is to count how many cells remain **unguarded and empty**.

The idea is to:

1. Mark the guards and walls first.
2. For each guard, mark all visible cells in four directions (up, down, left, right) until blocked.
3. Finally, count the remaining unmarked cells.

---

# Approach

1. **Initialize the grid**:

   - 0 → empty cell
   - 1 → wall
   - 2 → guard
   - 3 → guarded cell

2. **Mark guards and walls** in the grid.

3. **Simulate guard vision**:

   - For each guard, look in all 4 directions (north, south, east, west).
   - Stop marking when another guard or wall is encountered.
   - Mark all visible cells as `3` (guarded).

4. **Count unguarded cells**:
   - Iterate through the grid and count all cells still marked as `0`.

---

# Complexity

- **Time complexity:** `O(m * n)` — in the worst case, each guard may scan through an entire row or column.
- **Space complexity:** `O(m * n)` — for storing the grid representation.

---

# Code

```javascript []
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function (m, n, guards, walls) {
  let grid = Array.from({ length: m }, () => Array(n).fill(0));
  let ans = 0;

  // Fill guards
  for (let [r, c] of guards) {
    grid[r][c] = 2;
  }

  // Fill walls
  for (let [r, c] of walls) {
    grid[r][c] = 1;
  }

  // Mark guarded cells in all 4 directions
  function setGuardedCell(r, c) {
    // Left
    for (let i = c - 1; i >= 0; i--) {
      if (grid[r][i] === 1 || grid[r][i] === 2) break;
      grid[r][i] = 3;
    }
    // Right
    for (let i = c + 1; i < n; i++) {
      if (grid[r][i] === 1 || grid[r][i] === 2) break;
      grid[r][i] = 3;
    }
    // Up
    for (let i = r - 1; i >= 0; i--) {
      if (grid[i][c] === 1 || grid[i][c] === 2) break;
      grid[i][c] = 3;
    }
    // Down
    for (let i = r + 1; i < m; i++) {
      if (grid[i][c] === 1 || grid[i][c] === 2) break;
      grid[i][c] = 3;
    }
  }

  // Process all guards
  for (let [r, c] of guards) {
    setGuardedCell(r, c);
  }

  // Count unguarded cells
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 0) ans++;
    }
  }

  return ans;
};
```
