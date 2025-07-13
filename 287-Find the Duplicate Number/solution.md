# 287. Find the Duplicate Number

**Difficulty:** Medium  
[LeetCode Problem Link](https://leetcode.com/problems/find-the-duplicate-number/)

---

## 🧠 Intuition

This problem can be modeled as **cycle detection** in a linked list.

Consider each index as a node and `nums[i]` as the "next" pointer. Since the values are in the range `[1, n]`, there must be at least one duplicate which creates a cycle in the mapping.

We can use **Floyd's Tortoise and Hare (Cycle Detection Algorithm)** to find the entry point of the cycle, which corresponds to the duplicate number.

---

## 🛠️ Approach

1. **Detect Cycle:**

   - Initialize two pointers `slow` and `fast` at `nums[0]`.
   - Move `slow` by one step: `slow = nums[slow]`.
   - Move `fast` by two steps: `fast = nums[nums[fast]]`.
   - Repeat until `slow == fast`.

2. **Find Entry Point (Duplicate Number):**
   - Initialize `slow2` to `nums[0]`.
   - Move `slow` and `slow2` by one step until they meet.
   - The meeting point is the duplicate number.

---

## ⏱️ Complexity

- **Time Complexity:**  
  $$O(n)$$ — Each pointer moves at most `n` steps.

- **Space Complexity:**  
  $$O(1)$$ — Only constant extra space is used.

---

## ✅ Python Solution

```python
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        slow = nums[0]
        fast = nums[0]

        # Detect the cycle
        while True:
            slow = nums[slow]
            fast = nums[nums[fast]]
            if slow == fast:
                break

        # Find the entry point of the cycle (duplicate number)
        slow2 = nums[0]
        while slow != slow2:
            slow = nums[slow]
            slow2 = nums[slow2]

        return slow
```
