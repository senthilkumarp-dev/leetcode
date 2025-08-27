class Solution {
    public int[] nextGreaterElements(int[] nums) {
        int n = nums.length;
        int[] res = new int[n];
        ArrayDeque<Integer> stack = new ArrayDeque();
        Arrays.fill(res,-1);
        for(int i = 0 ; i <n*2 ;i++){
            int num = nums[i%n];
            while(!stack.isEmpty() && nums[stack.peek()] < num){
                int idx = stack.pop();
                res[idx] = num;
            }
            if(i < n){
                stack.push(i);
            }
        }
        return res;
    }
}