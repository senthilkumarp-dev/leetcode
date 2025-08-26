# 3000. Maximum Area of Longest Diagonal Rectangle

## Problem
You are given a 2D integer array `dimensions` where `dimensions[i] = [l, w]` indicates the length `l` and width `w` of the i-th rectangle.

Return the **area of the rectangle that has the longest diagonal**.  
If there are multiple such rectangles, return the one with the **largest area**.

---

**Example 1:**  
Input: dimensions = [[9,3],[8,6]]  
Output: 48  

**Example 2:**  
Input: dimensions = [[3,4],[4,3]]  
Output: 12  

---

# Intuition
The problem asks us to compare rectangles by their diagonal length.  
The diagonal of a rectangle with sides `l` and `w` can be calculated as:

\[
d = \sqrt{l^2 + w^2}
\]

Since the square root function is monotonic, we can simply compare `l² + w²` instead of computing actual square roots (avoiding floating-point errors).  
If two rectangles have the same diagonal length, we break ties by choosing the one with larger area (`l * w`).  

---

# Approach
1. Initialize `maxDiagonal = 0` and `maxArea = 0`.  
2. For each rectangle `[l, w]` in `dimensions`:  
   - Compute `currDiagonal = l² + w²`.  
   - If `currDiagonal > maxDiagonal`, update both `maxDiagonal` and `maxArea`.  
   - If `currDiagonal == maxDiagonal` but the area is larger, update `maxArea`.  
3. After processing all rectangles, return `maxArea`.  

---

# Complexity
- **Time complexity:**  
  $$O(n)$$ — we check each rectangle once.  
- **Space complexity:**  
  $$O(1)$$ — only a few variables stored.  

---

# Code
```javascript
/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let maxDiagonal = 0;
    let maxArea = 0;

    for (let i = 0; i < dimensions.length; i++) {
        let l = dimensions[i][0];
        let w = dimensions[i][1];
        let currDiagonal = (l * l) + (w * w);

        if (currDiagonal > maxDiagonal || 
           (currDiagonal === maxDiagonal && l * w > maxArea)) {
            maxDiagonal = currDiagonal;
            maxArea = l * w;
        }
    }
    return maxArea;
};

