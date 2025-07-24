# LeetCode 373: Find K Pairs with Smallest Sums

# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

You are given two sorted arrays and a number `k`. The goal is to find `k` pairs `(u, v)` such that `u` is from `nums1`, `v` is from `nums2`, and their sum is among the smallest. A brute force method would generate all combinations, but that would be too slow. Since the arrays are sorted, we can use a **min heap** to explore pairs in order of their sums efficiently.

# Approach

<!-- Describe your approach to solving the problem. -->

1. Use a min heap to track the next smallest possible pair.
2. Start by inserting the first `k` pairs using `nums1[i] + nums2[0]`.
3. Extract the smallest pair from the heap and add it to the result.
4. For each extracted pair `(i, j)`, push the next pair `(i, j + 1)` to the heap if it exists.
5. Repeat until you have `k` pairs or the heap is empty.

This approach avoids computing all pairs and ensures you only process the most promising ones.

# Complexity

- Time complexity: $O(k \log k)$

  <!-- Add your time complexity here, e.g. $$O(n)$$ -->

  Each heap operation takes log time and we do this up to k times.

- Space complexity: $O(k)$

  <!-- Add your space complexity here, e.g. $$O(n)$$ -->

  The heap and result list can each grow up to size k.

# Code

```java
class Solution {
    public List<List<Integer>> kSmallestPairs(int[] nums1, int[] nums2, int k) {
        List<List<Integer>> ans = new ArrayList<>();
        PriorityQueue<int[]> minHeap = new PriorityQueue<>(
            (a, b) -> Integer.compare(a[0], b[0])
        );

        // Initialize heap with pairs of nums1[i] + nums2[0]
        for (int i = 0; i < Math.min(k, nums1.length); i++) {
            minHeap.offer(new int[]{nums1[i] + nums2[0], i, 0});
        }

        // Extract the k smallest pairs
        while (k-- > 0 && !minHeap.isEmpty()) {
            int[] current = minHeap.poll();
            int sum = current[0];
            int i = current[1];
            int j = current[2];

            ans.add(Arrays.asList(nums1[i], nums2[j]));

            // Push next pair from the same row
            if (j + 1 < nums2.length) {
                minHeap.offer(new int[]{nums1[i] + nums2[j + 1], i, j + 1});
            }
        }

        return ans;
    }
}
```
