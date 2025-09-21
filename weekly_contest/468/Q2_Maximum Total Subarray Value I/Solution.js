/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function (nums, k) {
  let minVal = Math.min(...nums);
  let maxVal = Math.max(...nums);
  return k * (maxVal - minVal);
};