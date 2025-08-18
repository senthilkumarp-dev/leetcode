class Solution {
    public int findMaxLength(int[] nums) {
        int[] preSum = new int[nums.length + 1];
        Map<Integer, Integer> sumToIdx = new HashMap<>();
        preSum[0]=0;
        sumToIdx.put(preSum[0], 0);
        for(int i =0 ; i < nums.length ; i++){
            if(nums[i]==0){
                nums[i]= -1;
            }
        }
       int max = 0;
        for(int i = 1 ; i < nums.length+1 ; i++){
            preSum[i]=preSum[i-1]+nums[i-1];
            if(sumToIdx.containsKey(preSum[i])){
                int idx = sumToIdx.get(preSum[i]);
                max = Math.max(max , i - idx);
            }
            else{
                sumToIdx.put(preSum[i],i);
            }
        }

        return max;
    }
}
