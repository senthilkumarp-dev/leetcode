/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function (nums) {
  let res = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let even = new Set();
    let odd = new Set();
    for (let j = i; j < n; j++) {
      if (nums[j] % 2 == 0) {
        even.add(nums[j]);
      } else {
        odd.add(nums[j]);
      }
      if (even.size == odd.size) {
        res = Math.max(res, j - i + 1);
      }
    }
  }
  return res;
};
