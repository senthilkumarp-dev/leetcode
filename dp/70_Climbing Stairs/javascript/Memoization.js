/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  //Memoization way
  let db = Array(n + 1).fill(-1);

  function countWay(n) {
    if (n == 0 || n == 1) {
      return 1;
    }
    if (db[n] !== -1) {
      return db[n]
    }
    db[n] = countWay(n - 1) + countWay(n - 2);
    return db[n]
  }
  return countWay(n);
};