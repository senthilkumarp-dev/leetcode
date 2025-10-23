# Intuition
We want to find the maximum frequency of any number in the array after performing at most `numOperations` changes, where each change can increase or decrease a number by at most `k`.  
By checking possible target numbers (`num`, `num + k`, `num - k`) and counting how many elements can be converted to them, we can determine the maximum achievable frequency.

# Approach
1. Sort the array to make range queries efficient.
2. Count frequency of each number using a HashMap.
3. Create a set of candidate target numbers (`num`, `num + k`, `num - k` for each number).
4. For each candidate target:
   - Use binary search to find numbers in the range `[target - k, target + k]`.
   - Count how many can be converted to the target within `numOperations`.
   - Update the maximum frequency found.
5. Return the maximum frequency.

# Complexity
- Time complexity: `O(n log n + m log n)` where `m` is the number of unique candidates.
- Space complexity: `O(n)` for the frequency map and candidate set.

# Code
```java
class Solution {
    public int maxFrequency(int[] nums, int k, int numOperations) {
        Arrays.sort(nums);
        HashMap<Integer, Integer> freq = new HashMap<>();
        Set<Integer> candidates = new HashSet<>();

        for (int num : nums) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
            candidates.add(num);
            candidates.add(num + k);
            candidates.add(num - k);
        }

        int ans = 0;
        for (int target : candidates) {
            ans = Math.max(ans, maxFreq(nums, target, freq, k, numOperations));
        }

        return ans;
    }

    public int maxFreq(int[] nums, int target, HashMap<Integer, Integer> freq, int k, int numOperations) {
        int left = getIndex(nums, target - k);
        int right = getIndex(nums, target + k + 1);

        int operations = right - left - freq.getOrDefault(target, 0);
        return Math.min(operations, numOperations) + freq.getOrDefault(target, 0);
    }

    public int getIndex(int[] nums, int target) {
        int l = 0, r = nums.length;
        while (l < r) {
            int mid = (l + r) / 2;
            if (nums[mid] < target) l = mid + 1;
            else r = mid;
        }
        return l;
    }
}
