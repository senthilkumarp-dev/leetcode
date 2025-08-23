# 496. Next Greater Element I

**Difficulty:** Easy  
[LeetCode Problem Link](https://leetcode.com/problems/next-greater-element-i/)

---

## 🧠 Problem Summary

Given two distinct 0-indexed arrays `nums1` and `nums2`, where `nums1` is a subset of `nums2`, find the **next greater element** for each element in `nums1` **based on the order in `nums2`**.

The **next greater element** of `x` is the **first element to the right of `x` in `nums2` that is greater than `x`**. If no such element exists, return `-1` for that position.

---

## 🧠 Intuition

A brute-force solution would check, for each element in `nums1`, where it appears in `nums2` and search to the right for the next greater number.  
However, this approach has **O(n²)** time complexity and is inefficient.

To solve this efficiently, we can use the **Monotonic Stack** pattern.  
The stack helps us precompute the **next greater elements** for all elements in `nums2` **in a single pass**.

---

## 🚀 What is a Monotonic Stack?

A **Monotonic Stack** is a stack that is either:

- **Monotonically Increasing:** Elements are pushed in order from small to large.
- **Monotonically Decreasing:** Elements are pushed in order from large to small.

For **Next Greater Element problems**, we usually use a **Monotonically Decreasing Stack** because:

- We keep the largest elements on the stack.
- When a larger element comes, we **pop elements that are smaller than it**, because we've found their **next greater element**.

---

## 🛠️ Approach

### Step 1: Build the `nextGreaterMap` for `nums2`

- Initialize an empty **stack** and an empty **map**.
- Loop through `nums2`:

  - While the stack is **not empty** and the **current element** is **greater** than the top of the stack:
    - Pop the top element from the stack.
    - Set `nextGreaterMap[top_element] = current_element`
    - This means `current_element` is the **next greater element** for `top_element`.
  - Push the current element onto the stack.

- After the loop, the remaining elements in the stack have **no next greater element**, so their values default to `-1`.

---

### Step 2: Build the result for `nums1`

- For each element in `nums1`, look up its **next greater element** in `nextGreaterMap`.
- If it doesn't exist, return `-1`.

---

## ⏱️ Complexity

- **Time Complexity:**  
  $$O(n)$$ — Each element is pushed and popped at most once.

- **Space Complexity:**  
  $$O(n)$$ — For the stack and the `nextGreaterMap`.

---

## Solution

```python []
class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        stack = []
        nextGreaterMap = {}

        # Build the map using Monotonic Stack
        for num in nums2:
            while stack and stack[-1] < num:
                nextGreaterMap[stack.pop()] = num
            stack.append(num)

        # Build the result
        result = []
        for num in nums1:
            result.append(nextGreaterMap.get(num, -1))

        return result
```

```java []
class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        Map<Integer, Integer> nextGreaterMap = new HashMap<>();
        Stack<Integer> stack = new Stack<>();

        // Build the map using Monotonic Stack
        for (int num : nums2) {
            while (!stack.isEmpty() && stack.peek() < num) {
                nextGreaterMap.put(stack.pop(), num);
            }
            stack.push(num);
        }

        // Build the result
        int[] result = new int[nums1.length];
        for (int i = 0; i < nums1.length; i++) {
            result[i] = nextGreaterMap.getOrDefault(nums1[i], -1);
        }

        return result;
    }
}
```

```javascript []
var nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const nextGreaterMap = new Map();

  // Build the map using Monotonic Stack
  for (let num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      nextGreaterMap.set(stack.pop(), num);
    }
    stack.push(num);
  }

  const result = [];
  for (let num of nums1) {
    result.push(nextGreaterMap.get(num) ?? -1);
  }

  return result;
};
```
