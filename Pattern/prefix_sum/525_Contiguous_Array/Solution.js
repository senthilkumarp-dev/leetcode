/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let sum = 0;
    let presum = new Map();
    let res = 0;
    presum.set(0,-1)
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i]==0){
            nums[i]=-1;
        }
        sum+=nums[i];
        if(presum.has(sum)){
            res = Math.max(res,i - presum.get(sum))
        }
        else{
            presum.set(sum,i)
        }
    }
    return res;
};
