/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let n = nums.length;
  nums.sort((a, b) => a - b);
  let visited = new Array(n).fill(0);
  let ans = [];
  let backTrack = (path) => {
    if (path.length == n) {
      ans.push([...path]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (i > 0 && nums[i - 1] == nums[i] && visited[i - 1] == 1) continue;
      if (visited[i]) continue;
      visited[i] = 1;
      path.push(nums[i]);
      backTrack(path);
      path.pop();
      visited[i] = 0;
    }
  };
  backTrack([]);
  return ans;
};
