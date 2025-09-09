/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = binarySearch(nums, target, true);
  let right = binarySearch(nums, target, false);
  return [left, right];
};
function binarySearch(nums, target, leftBias) {
  let l = 0;
  let r = nums.length - 1;
  let i = -1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      i = mid;
      if (leftBias) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }
  return i;
}
