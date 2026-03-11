/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
     return helper(nums,k) - helper(nums,k-1);
};

function helper(nums,k){
   let l = 0;
   let r = 0;
   let count = 0;
   let sum = 0;
   while(r < nums.length){
     sum += nums[r] % 2;
    while(sum > k){
        sum -= nums[l] % 2;
        l++;
    }
    if(sum <= k){
        count = count + (r - l + 1);
    }
    r++;
   }
   return count;
}