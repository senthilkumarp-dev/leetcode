/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let res = 2;
  let prev1 = nums[1];
  let prev2 = nums[0];
  let l = 0;
  let r = 2;
  while (r < nums.length) {
    if (nums[r] == prev1 + prev2) {
      res = Math.max(res, r - l + 1);
      prev2 = prev1;
      prev1 = nums[r];
    } else {
      l = r - 1;
      prev1 = nums[r];
      prev2 = nums[l];
    }
    r++;
  }
  return res;
};
