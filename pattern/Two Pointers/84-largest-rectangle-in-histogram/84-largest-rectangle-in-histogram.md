# 84. Largest Rectangle in Histogram

**Difficulty:** Hard  
[LeetCode Problem Link](https://leetcode.com/problems/largest-rectangle-in-histogram/)

---

## 🧠 Problem Summary

Given an array of integers `heights` representing the heights of histogram bars, find the **largest rectangular area** that can be formed in the histogram.

Each bar has a width of 1.

---

## 🧠 Intuition

For each bar in the histogram, imagine **extending the rectangle to the left and right** until you hit a **smaller bar**.  
This rectangle will have:

- **Height = current bar’s height**
- **Width = distance between the previous smaller element (PSE) and next smaller element (NSE)**

---

## 🚀 Why Monotonic Stack?

A **Monotonic Increasing Stack** can help efficiently find the **Previous Smaller Element (PSE)** and **Next Smaller Element (NSE)** for each bar.

The key idea is:

- Keep indices in a stack in **increasing order of heights**.
- If a smaller height comes, **pop the stack** and calculate the area for the popped bar, treating it as the **smallest bar** of a rectangle.

---

## 🛠️ Approach

### Step 1: Iterate through `heights`

For each bar at index `i`:

- While the stack is **not empty** and `heights[stack[-1]] > heights[i]`:
  - Pop the top index from the stack.
  - The **height** of the rectangle is `heights[popped_index]`.
  - The **width** is `i - (stack[-1] if stack is not empty else -1) - 1`.
    - `i` is the **Next Smaller Element (NSE)**.
    - `stack[-1]` is the **Previous Smaller Element (PSE)**.
- Push `i` onto the stack.

### Step 2: Process remaining elements in the stack

For bars still in the stack after the iteration:

- Treat the **end of the histogram** as their **NSE**.
- Calculate the area as:
  - `height * (len(heights) - (stack[-1] if stack is not empty else -1) - 1)`

### Step 3: Keep track of the **maximum area** found.

---

## ⏱️ Complexity

- **Time Complexity:**  
  $$O(n)$$ — Each bar is pushed and popped at most once.

- **Space Complexity:**  
  $$O(n)$$ — For the stack.

---

## ✅ Python Solution

```python []
class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = []
        maxArea = 0
        n = len(heights)

        for i in range(n):
            while stack and heights[stack[-1]] > heights[i]:
                h_idx = stack.pop()
                height = heights[h_idx]
                width = i - (stack[-1] if stack else -1) - 1
                maxArea = max(maxArea, height * width)

            stack.append(i)

        while stack:
            h_idx = stack.pop()
            height = heights[h_idx]
            width = n - (stack[-1] if stack else -1) - 1
            maxArea = max(maxArea, height * width)

        return maxArea
```

```java []
class Solution {
    public int largestRectangleArea(int[] heights) {
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;
        int n = heights.length;

        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && heights[stack.peek()] > heights[i]) {
                int h = heights[stack.pop()];
                int width = i - (stack.isEmpty() ? -1 : stack.peek()) - 1;
                maxArea = Math.max(maxArea, h * width);
            }
            stack.push(i);
        }

        while (!stack.isEmpty()) {
            int h = heights[stack.pop()];
            int width = n - (stack.isEmpty() ? -1 : stack.peek()) - 1;
            maxArea = Math.max(maxArea, h * width);
        }

        return maxArea;
    }
}
```
