/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
  if (nums.length == 1) {
    return nums[0];
  }
  let prev2 = nums[0];
  let prev1 = Math.max(nums[1], nums[0]);
  for (let i = 2; i < nums.length; i++) {
    let pick = nums[i] + prev2;
    let unpick = prev1;
    let curr = Math.max(pick, unpick);
    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
};
