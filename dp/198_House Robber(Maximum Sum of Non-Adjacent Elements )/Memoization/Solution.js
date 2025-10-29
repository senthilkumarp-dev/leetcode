var rob = function (nums) {
  let dp = new Array(nums.length).fill(-1);

  let helper = (i) => {
    if (i == 0) return nums[i];
    if (i < 0) return 0;

    if (dp[i] != -1) {
      return dp[i];
    }

    let pick = nums[i] + helper(i - 2);
    let unpick = 0 + helper(i - 1);

    dp[i] = Math.max(pick, unpick);

    return dp[i];
  };
  return helper(nums.length - 1);
};
/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
  let dp = new Array(nums.length).fill(-1);

  let helper = (i) => {
    if (i == 0) return nums[i];
    if (i < 0) return 0;

    if (dp[i] != -1) {
      return dp[i];
    }

    let pick = nums[i] + helper(i - 2);
    let unpick = 0 + helper(i - 1);

    dp[i] = Math.max(pick, unpick);

    return dp[i];
  };
  return helper(nums.length - 1);
};
