/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let map = new Map();
  map.set(0, 1);
  let ans = 0;
  let prefixSum = 0;
  for (let num of nums) {
    prefixSum += num;
    let rem = ((prefixSum % k) + k) % k;
    if (map.has(rem)) {
      ans += map.get(rem);
    }
    map.set(rem, (map.get(rem) || 0) + 1);
  }
  return ans;
};
