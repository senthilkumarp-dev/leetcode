/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let lsum = 0;
  let rsum = 0;
  let maxsum = 0;
  for (let i = 0; i < k; i++) {
    lsum += cardPoints[i];
  }
  maxsum = Math.max(maxsum, lsum);
  let right = cardPoints.length - 1;
  for (let i = k - 1; i >= 0; i--) {
    lsum -= cardPoints[i];
    rsum += cardPoints[right--];
    maxsum = Math.max(maxsum, lsum + rsum);
  }
  return maxsum;
};
