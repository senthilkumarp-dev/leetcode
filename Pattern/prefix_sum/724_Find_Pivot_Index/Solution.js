/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let total = nums.reduce((total, num) => total + num, 0);
  let leftTotal = 0;
  for (let i = 0; i < nums.length; i++) {
    let rightTotal = total - leftTotal - nums[i];
    if (leftTotal == rightTotal) {
      return i;
    }
    leftTotal += nums[i];
  }
  return -1;
};

// time O(n) space O(1)
