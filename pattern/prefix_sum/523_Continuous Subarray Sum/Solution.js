/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let map = new Map();
  map.set(0, -1);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let mod = k == 0 ? sum : sum % k;
    if (map.has(mod)) {
      if (i - map.get(mod) > 1) {
        return true;
      }
    } else {
      map.set(mod, i);
    }
  }
  return false;
};
