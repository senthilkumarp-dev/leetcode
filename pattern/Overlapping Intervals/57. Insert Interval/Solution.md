# LeetCode 57: Insert Interval

# Intuition

When inserting a new interval into an existing list of sorted, non-overlapping intervals, there are three cases to handle:

1. Intervals **before** the new interval that do not overlap (add them directly).
2. Intervals that **overlap** with the new interval (merge them).
3. Intervals **after** the new interval that do not overlap (add them after merging).

By handling these three parts systematically, we can insert and merge efficiently.

# Approach

1. **Initialize a result list** to store the final merged intervals.
2. Traverse the intervals from the start:
   - Add all intervals that end **before** `newInterval` starts (no overlap).
3. For the intervals that **overlap** with `newInterval`:
   - Update the start of `newInterval` to `min(newInterval[0], current[0])`.
   - Update the end of `newInterval` to `max(newInterval[1], current[1])`.
   - Continue until no more overlaps exist.
4. Add the merged `newInterval` to the result.
5. Finally, add all remaining intervals that start **after** the merged interval.

# Complexity

- **Time complexity:** $$O(n)$$  
  Each interval is visited at most once.
- **Space complexity:** $$O(n)$$  
  A new list is created to hold the result.

# Code

```java []
class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        ArrayList<int[]> result = new ArrayList<>();

        // Step 1: Add intervals before newInterval
        int i = 0;
        while (i < intervals.length && intervals[i][1] < newInterval[0]) {
            result.add(intervals[i]);
            i++;
        }

        // Step 2: Merge overlapping intervals with newInterval
        while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }

        // Add the merged newInterval
        result.add(newInterval);

        // Step 3: Add intervals after newInterval
        while (i < intervals.length) {
            result.add(intervals[i]);
            i++;
        }

        return result.toArray(new int[result.size()][]);
    }
}
```

```python []
class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        ans = []
        i =0
        intervalLen = len(intervals)
        while i < intervalLen and intervals[i][1] < newInterval[0]:
            ans.append(intervals[i])
            i = i + 1
        while i < intervalLen and intervals[i][0] <= newInterval[1] :
            newInterval[0] = min(newInterval[0],intervals[i][0])
            newInterval[1] = max(newInterval[1],intervals[i][1])
            i = i + 1
        ans.append(newInterval)

        while i < intervalLen:
            ans.append(intervals[i])
            i = i + 1
        return ans
```

```javascript []
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  result = [];
  let i = 0;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }
  return result;
};
```
