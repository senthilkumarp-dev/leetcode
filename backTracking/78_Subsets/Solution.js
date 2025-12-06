/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [];
  let backTrack = (path, start) => {
    res.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backTrack(path, i + 1);
      path.pop();
    }
  };
  backTrack([], 0);
  return res;
};
