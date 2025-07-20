# 215. Kth Largest Element in an Array

**Difficulty:** Medium  
[LeetCode Problem Link](https://leetcode.com/problems/kth-largest-element-in-an-array/)

---

## 🧠 Problem Summary

Given an array of integers `nums` and an integer `k`, return the **kth largest element** in the array.

**Note:**

- The "kth largest element" is the **kth element from the end** of a sorted array (not necessarily distinct).

---

## 🧠 Intuition

If we **sort the array**, the solution is simple:  
Return `nums_sorted[-k]`.

But sorting takes **O(n log n)** time.

To solve this more efficiently, we can use a **Min-Heap (Priority Queue)**:

- Keep a heap of size `k` containing the **k largest elements seen so far**.
- The **smallest element in the heap** is at the top.
- At the end, the root of the heap is the **kth largest element**.

---

## 🛠️ Approach

1. **Build a min-heap** of the first `k` elements.
2. For each remaining element in `nums`:
   - If the current number is **greater than the heap's smallest element** (`heap[0]`), pop the smallest and push the current number.
3. After processing all elements, the heap's root (`heap[0]`) will be the **kth largest element**.

---

## 🧮 Why Min-Heap?

- A **Min-Heap** ensures that the smallest of the top `k` elements is at the root.
- Keeping the heap at size `k` reduces unnecessary comparisons.

---

## ⏱️ Complexity

- **Time Complexity:**  
  $$O(n \log k)$$

  - Building the heap: $$O(k)$$
  - Each insertion/removal: $$O(\log k)$$
  - For the remaining $$n-k$$ elements: $$O((n-k)\log k)$$

- **Space Complexity:**  
  $$O(k)$$ — For the heap.

---

## Solution

```python []
import heapq

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        # Create a min-heap with first k elements
        heap = nums[:k]
        heapq.heapify(heap)

        # Process the rest of the numbers
        for num in nums[k:]:
            if num > heap[0]:
                heapq.heappop(heap)
                heapq.heappush(heap, num)

        # The root of the heap is the kth largest
        return heap[0]

```

```java []
class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> heap = new PriorityQueue<>();

        for(int i= 0 ; i < k ; i++){
            heap.offer(nums[i]);
        }
        for(int i=k;i<nums.length;i++){
            if(nums[i]>heap.peek()){
                heap.poll();
                heap.offer(nums[i]);
            }
        }
        return heap.peek();
    }
}
```
