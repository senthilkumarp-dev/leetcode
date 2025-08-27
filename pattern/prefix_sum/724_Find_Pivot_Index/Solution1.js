/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let preSum = [];
  preSum[0] = nums[0];
  let n = nums.length;
  for (let i = 1; i < n; i++) {
    preSum[i] = preSum[i - 1] + nums[i];
  }
  for (let j = 0; j < n; j++) {
    let left = j == 0 ? 0 : preSum[j - 1];
    let right = j == n - 1 ? 0 : preSum[n - 1] - preSum[j];
    if (left == right) {
      return j;
    }
  }
  return -1;
};
//space O(n) time O(n)
