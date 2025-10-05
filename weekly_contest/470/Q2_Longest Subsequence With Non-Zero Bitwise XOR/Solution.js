// You are given an integer array nums.

// Return the length of the longest subsequence in nums whose bitwise XOR is non - zero.If no such subsequence exists, return 0.

//  

// Example 1:

// Input: nums = [1, 2, 3]

// Output: 2

// Explanation:

// One longest subsequence is[2, 3].The bitwise XOR is computed as 2 XOR 3 = 1, which is non - zero.

//   Example 2:

// Input: nums = [2, 3, 4]

// Output: 3

// Explanation:

// The longest subsequence is[2, 3, 4].The bitwise XOR is computed as 2 XOR 3 XOR 4 = 5, which is non - zero.



//   Note: Please do not copy the description during the contest to maintain the integrity of your submissions.

var longestSubsequence = function (nums) {
  let res = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    res ^= nums[i];
  }
  if (res !== 0) return n;          // total XOR non-zero
  if (nums.every(x => x === 0)) return 0;  // all elements zero
  return n - 1;
};