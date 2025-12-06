/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let left = -1;
    let right = 0;
    let res = Number.MAX_SAFE_INTEGER;
    while(right < nums.length){
        sum+=nums[right];
        while(sum >= target){
            res = Math.min(res,right - left);
            sum-=nums[left+1];
            left++;
        }
        right++;
    }
    return res==Number.MAX_SAFE_INTEGER?0:res;
};
