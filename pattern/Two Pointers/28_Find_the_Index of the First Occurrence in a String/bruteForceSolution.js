/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let idx = i;
      let j = 0;
      while (j < needle.length && idx < haystack.length) {
        if (haystack[idx] !== needle[j]) {
          break;
        }
        j++;
        idx++;
        if (j == needle.length) {
          return i;
        }
      }
    }
  }
  return -1;
};
// Time complexity: O(n * m),
