/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
  nums.sort((a, b) => Math.abs(a) - Math.abs(b));
  let l = 0;
  let r = nums.length - 1;
  let ans = 0;
  while (l <= r) {
    if (l == r) {
      ans += nums[l] * nums[l];
    } else {
      ans += nums[r] * nums[r] - nums[l] * nums[l];
    }
    l++;
    r--;
  }
  return ans;
};
