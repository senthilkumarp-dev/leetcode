/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let m = g.length;
  let n = s.length;
  let j = 0;
  let i = 0;
  while (j < n && i < m) {
    if (s[j] >= g[i]) {
      i++;
    }
    j++;
  }
  return i;
};
