/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0]);
  let res = 1;
  let prev = points[0];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] <= prev[1]) {
      prev = [points[i][0], Math.min(points[i][1], prev[1])];
    } else {
      res++;
      prev = points[i];
    }
  }
  return res;
};
