# LeetCode 435: Non-overlapping Intervals

# Intuition

We want to remove the **minimum number of intervals** so that the rest do not overlap.  
If we sort the intervals by their **end time**, we can use a **greedy approach**:

- Always keep the interval that ends earliest, because it leaves the most room for future intervals.

# Approach

1. **Sort** the intervals based on their end times (ascending).
2. Initialize:
   - `prev` to the first interval.
   - `answer` to count the number of intervals we remove.
3. Iterate through each interval:
   - If the current interval **overlaps** with `prev` (i.e., `intervals[i][0] < prev[1]`):
     - Increment `answer` (we remove this interval).
   - Otherwise:
     - Update `prev` to the current interval (keep it).
4. Return `answer` at the end.

This ensures we remove the **minimum number of intervals**.

# Complexity

- **Time complexity:** $$O(n \log n)$$  
  Sorting dominates the time.
- **Space complexity:** $$O(1)$$  
  Only a few variables are used, no extra data structures.

# Code

```java []
class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        // Step 1: Sort by end time
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));

        int[] prev = intervals[0];
        int answer = 0;

        // Step 2: Iterate through intervals
        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < prev[1]) {
                // Overlap detected, remove current interval
                answer++;
            } else {
                // No overlap, update prev
                prev = intervals[i];
            }
        }

        return answer;
    }
}
```

```python []
class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x:x[1])
        answer = 0
        prev = intervals[0]
        for i in range (1,len(intervals)):
            if intervals[i][0] < prev[1]:
                answer = answer + 1
            else :
                prev = intervals[i]
        return answer
```

```javascript []
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let answer = 0;
  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prev[1]) {
      answer++;
    } else {
      prev = intervals[i];
    }
  }
  return answer;
};
```
