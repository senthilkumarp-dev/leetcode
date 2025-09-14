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
