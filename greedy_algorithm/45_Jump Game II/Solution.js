/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jump = 0;
  let l = 0;
  let r = 0;
  let farthest = 0;
  while (r < nums.length - 1) {
    for (let idx = l; idx <= r; idx++) {
      farthest = Math.max(idx + nums[idx], farthest);
    }
    jump++;
    l = r + 1;
    r = farthest;
  }

  return jump;
};
