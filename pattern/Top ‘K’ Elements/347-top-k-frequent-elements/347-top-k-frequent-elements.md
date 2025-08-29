# 347. Top K Frequent Elements

**Difficulty:** Medium  
[LeetCode Problem Link](https://leetcode.com/problems/top-k-frequent-elements/)

---

## 🧠 Problem Summary

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.  
You can return the answer **in any order**.

---

## 🧠 Intuition

The first step is to **count how many times each element appears** using a **HashMap**.

Once we have the frequency of each element, we can solve this problem using a **Min-Heap (Priority Queue)** to efficiently track the top `k` elements.

---

## 🛠️ Approach

### Step 1: Count the Frequency

- Use a `HashMap` to store how many times each number appears.

Example:  
`nums = [1,1,1,2,2,3]`  
`count = {1:3, 2:2, 3:1}`

---

### Step 2: Use a Min-Heap to Keep Top `k` Elements

- Initialize a **Min-Heap** where the smallest frequency is at the top.
- For each key in `count`:
  - Add the element to the heap.
  - If the heap size exceeds `k`, remove the smallest frequency element.
- At the end, the heap contains the `k` most frequent elements.

---

### Why Min-Heap?

- The Min-Heap allows us to **maintain the top `k` frequent elements** efficiently.
- If an element with a higher frequency comes in, it replaces the smallest in the heap.
- This reduces the time complexity compared to sorting all elements.

---

## ⏱️ Complexity

- **Time Complexity:**  
  $$O(n \log k)$$

  - Counting frequencies: $$O(n)$$
  - Inserting into heap: $$O(n \log k)$$

- **Space Complexity:**  
  $$O(n)$$ — For the hash map and the heap.

---

## ✅ code

```java
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        if (nums.length == k) {
            return nums; // Edge case: return all elements if k == nums.length
        }

        // Step 1: Count frequencies
        HashMap<Integer, Integer> count = new HashMap<>();
        for (int n : nums) {
            count.put(n, count.getOrDefault(n, 0) + 1);
        }

        // Step 2: Use min-heap to keep top k frequent elements
        Queue<Integer> heap = new PriorityQueue<>((a, b) -> count.get(a) - count.get(b));

        for (int n : count.keySet()) {
            heap.add(n);
            if (heap.size() > k) {
                heap.poll();
            }
        }

        // Step 3: Build the result array
        int[] result = new int[k];
        for (int i = k - 1; i >= 0; i--) {
            result[i] = heap.poll();
        }

        return result;
    }
}
```
