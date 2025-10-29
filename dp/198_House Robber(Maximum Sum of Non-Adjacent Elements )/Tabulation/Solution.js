/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
  if (nums.length == 1) {
    return nums[0];
  }
  let dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[1], nums[0]);
  for (let i = 2; i < nums.length; i++) {
    let pick = nums[i] + dp[i - 2];
    let unpick = dp[i - 1];
    dp[i] = Math.max(pick, unpick);
  }

  return dp[nums.length - 1];
};
