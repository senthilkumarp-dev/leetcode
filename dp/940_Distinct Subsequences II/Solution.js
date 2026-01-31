/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function (s) {
  let dp = 1;
  let letter = Array(26).fill(0);
  let mod = 1000000007;
  for (let ch of s) {
    let idx = ch.charCodeAt(0) - 97;
    let newDp = (dp * 2 - letter[idx] + mod) % mod;
    letter[idx] = dp;
    dp = newDp;
  }
  return (dp - 1 + mod) % mod;
};
