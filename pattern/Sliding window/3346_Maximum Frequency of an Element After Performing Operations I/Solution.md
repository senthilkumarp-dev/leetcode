# Intuition
We want to find the **maximum frequency** of any number in the array after performing at most `numOperations` changes, where each operation can increase or decrease a number by at most `k`.

By sorting the array, we can efficiently count how many numbers fall within a range `[target - k, target + k]`.  
For each possible target number, we can see how many numbers can be converted to that target using the allowed operations.

---

# Approach
1. **Sort the array** — this allows for binary search and easier range counting.  
2. **Count frequencies** using a HashMap for quick access to how many times each number appears.
3. For every possible target value (from `1` to the maximum number in `nums`):
   - Use binary search to find indices of numbers within the range `[target - k, target + k]`.
   - Calculate how many numbers can potentially become the target (`operations = right - left - freq[target]`).
   - The total frequency for that target is the existing frequency plus the possible operations, capped at `numOperations`.
4. Track the **maximum frequency** found among all targets.

---

# Complexity
- **Time Complexity:**  
  - Sorting: `O(n log n)`  
  - For each target, we perform binary searches: `O(maxNum * log n)`  
  So overall roughly **O(n log n + maxNum * log n)**.
  
- **Space Complexity:**  
  - Frequency map and auxiliary variables: **O(n)**

---

# Code
```java
class Solution {
    public int maxFrequency(int[] nums, int k, int numOperations) {
        Arrays.sort(nums);
        HashMap<Integer, Integer> freq = new HashMap<>();

        for (int num : nums) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }

        int maxNum = nums[nums.length - 1];
        int ans = 0;

        for (int target = 1; target <= maxNum; target++) {
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
            if (nums[mid] < target)
                l = mid + 1;
            else
                r = mid;
        }
        return l;
    }
}
