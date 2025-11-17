class Solution {
  f(day, last, arr, dp) {
    if (day == 0) {
      let maxi = 0;
      for (let i = 0; i < 3; i++) {
        if (i !== last) {
          maxi = Math.max(maxi, arr[0][i]);
        }
      }
      return maxi;
    }
    if (dp[day][last] !== -1) return dp[day][last];
    let maxi = 0;
    for (let i = 0; i < 3; i++) {
      if (i !== last) {
        maxi = Math.max(maxi, arr[day][i] + this.f(day - 1, i, arr, dp));
      }
    }
    dp[day][last] = maxi;
    return maxi;
  }
  // Function to find the maximum points among all the possible ones.
  maximumPoints(arr) {
    let dp = Array.from({ length: arr.length }, () => Array(4).fill(-1));
    return this.f(arr.length - 1, 3, arr, dp);
  }
}
