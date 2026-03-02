/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let set  = new Set();
    let sum = 0;
    let r = 0;
    let l = 0;
    let maxSum = 0;
    while(r < nums.length){
        while(set.has(nums[r])){
            sum -= nums[l]
            set.delete(nums[l]);
            l++;
        }
        sum+= nums[r];
        set.add(nums[r]);
        r++;
        if(r-l == k){
            maxSum = Math.max(maxSum,sum);
            sum -= nums[l]
            set.delete(nums[l]);
            l++;
        }
    }
    return maxSum;
};