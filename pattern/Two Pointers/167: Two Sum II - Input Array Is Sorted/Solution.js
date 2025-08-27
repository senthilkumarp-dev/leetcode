/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let len = numbers.length;
  let left = 0;
  let right = len - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [++left, ++right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
};
