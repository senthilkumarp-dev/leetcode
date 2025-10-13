/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function (s) {
  let res = 0;
  const n = s.length;

  for (let i = 0; i < n; i++) {
    const freq = new Map();
    for (let j = i; j < n; j++) {
      freq.set(s[j], (freq.get(s[j]) ?? 0) + 1);

      // check if all frequencies are equal
      const values = [...freq.values()];
      const first = values[0];
      const allEqual = values.every(v => v === first);

      if (allEqual) {
        res = Math.max(res, j - i + 1);
      }
    }
  }
  return res;
};