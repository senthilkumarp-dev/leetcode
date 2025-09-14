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
