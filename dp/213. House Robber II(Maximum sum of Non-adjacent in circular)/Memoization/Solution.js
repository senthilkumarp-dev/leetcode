/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  let n = nums.length;
  let temp1 = [];
  let temp2 = [];
  let dp1 = Array(n - 1).fill(-1);
  let dp2 = Array(n - 1).fill(-1);
  for (let i = 0; i < n; i++) {
    if (i !== 0) temp1.push(nums[i]);
    if (i !== n - 1) temp2.push(nums[i]);
  }
  let getMaxRob = (arr, i, dp) => {
    if (i == 0) return arr[i];
    if (dp[i] !== -1) return dp[i];
    let take = arr[i];
    if (i > 1) take += getMaxRob(arr, i - 2, dp);
    let notTake = 0 + getMaxRob(arr, i - 1, dp);
    dp[i] = Math.max(take, notTake);
    return dp[i];
  };
  return Math.max(getMaxRob(temp1, n - 2, dp1), getMaxRob(temp2, n - 2, dp2));
};
