class Solution {
    public int maxFrequency(int[] nums, int k, int numOperations) {
        Arrays.sort(nums);
        HashMap<Integer,Integer> freq = new HashMap<>();

        for(int num : nums){
            freq.put(num , freq.getOrDefault(num,0)+1);
        } 
        int maxNum =  nums[nums.length-1];
        int ans = 0;
        for(int target= 1 ; target <=maxNum; target++){
            ans = Math.max(ans,maxFreq(nums,target,freq,k,numOperations));
        }
        return ans;
    }

    public int maxFreq(int[] nums,int target , HashMap<Integer,Integer> freq ,int k,int numOperations){
        int left =  getIndex(nums,target-k);
        int right = getIndex(nums,target+k+1);
 
        int operations = right - left - freq.getOrDefault(target,0);
        return Math.min(operations,numOperations) + freq.getOrDefault(target,0);
    }
    public int getIndex(int[] nums,int target){
        int l = 0 ;
        int r  = nums.length;
        while(l<r){
            int mid  =  (l+r)/2;
            if(nums[mid] < target){
                l = mid+1;
            }
            else{
                r=mid;
            }
        }
        return l;
    }
}