/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  let n = nums.length;
  let temp1 = [];
  let temp2 = [];

  // Split into two cases: exclude first or last
  for (let i = 0; i < n; i++) {
    if (i !== 0) temp1.push(nums[i]);
    if (i !== n - 1) temp2.push(nums[i]);
  }

  // Helper function for linear house robber
  let getMaxRob = (arr) => {
    let prev = arr[0];
    let prev2 = 0;
    for (let i = 1; i < arr.length; i++) {
      let take = arr[i];
      if (i > 1) take += prev2;
      let notTake = prev;
      let curr = Math.max(take, notTake);
      prev2 = prev;
      prev = curr;
    }
    return prev;
  };

  // Return max between two scenarios
  return Math.max(getMaxRob(temp1), getMaxRob(temp2));
};
