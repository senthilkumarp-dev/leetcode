/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let res = [];
  let backTrack = (start, curr, sum) => {
    if (curr.length == k) {
      if (sum == n) {
        return res.push([...curr]);
      }
      return;
    }
    if (start > n || sum > n) {
      return;
    }
    for (let i = start; i < 10; i++) {
      curr.push(i);
      sum += i;
      backTrack(i + 1, curr, sum);
      curr.pop();
      sum -= i;
    }
  };
  backTrack(1, [], 0);
  return res;
};
