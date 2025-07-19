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