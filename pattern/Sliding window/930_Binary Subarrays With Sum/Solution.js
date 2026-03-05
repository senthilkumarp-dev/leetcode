/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
  let sum1 =  helper(nums,goal);
  let sum2 =  helper(nums,goal - 1);
  return sum1 - sum2;
};

var helper = function(nums,goal){
  if(goal < 0) return 0;
  let l = 0;
  let r = 0;
  let sum = 0;
  let count = 0;

  while(r < nums.length){
    sum = sum+nums[r];
    while(sum > goal){
        sum -= nums[l];
        l++;
    }
    count = count + (r - l +1);
    r++;
  }
  return count;

}