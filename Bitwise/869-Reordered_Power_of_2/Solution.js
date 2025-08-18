/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
  let target = sortedString(n);
  for (let i = 0; i < 31; i++) {
    if (sortedString(1 << i) == target) {
      return true;
    }
  }
  return false;
};
function sortedString(n) {
  return String(n).split("").sort().join("");
}
