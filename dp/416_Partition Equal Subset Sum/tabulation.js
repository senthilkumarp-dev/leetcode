/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let n = nums.length;
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  if (sum % 2 !== 0) {
    return false;
  }
  let k = sum / 2;
  let dp = Array.from({ length: n }, () => Array(k + 1).fill(false));
  for (let i = 0; i < n; i++) {
    dp[i][0] = true;
  }

  // First element
  if (nums[0] <= k) {
    dp[0][nums[0]] = true;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      let notTake = dp[i - 1][j];

      let take = false;
      if (nums[i] <= j) {
        take = dp[i - 1][j - nums[i]];
      }

      dp[i][j] = take || notTake;
    }
  }

  return dp[n - 1][k];
};
