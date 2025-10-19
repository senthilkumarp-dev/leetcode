/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function (nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let mul = 1;
  let ans = k;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == ans) {
      left = 0;
      right = nums.length - 1;
      mul = mul + 1;
      ans = k * mul;
    } else if (nums[mid] < ans) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
};
