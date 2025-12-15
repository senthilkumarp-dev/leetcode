/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (maxIndex < i) return false;
    maxIndex = Math.max(maxIndex, i + nums[i]);
  }
  return true;
};
