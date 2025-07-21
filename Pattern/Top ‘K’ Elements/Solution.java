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