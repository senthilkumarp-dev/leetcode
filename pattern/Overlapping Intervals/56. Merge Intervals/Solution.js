/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let merged = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    interval = intervals[i];
    if (prev[1] >= interval[0]) {
      prev[1] = Math.max(prev[1], interval[1]);
    } else {
      merged.push(prev);
      prev = interval;
    }
  }
  merged.push(prev);
  return merged;
};
