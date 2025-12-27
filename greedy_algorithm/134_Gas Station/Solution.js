/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let gasSum = 0;
  let costSum = 0;
  for (let i = 0; i < gas.length; i++) {
    gasSum += gas[i];
    costSum += cost[i];
  }
  if (gasSum < costSum) return -1;
  let total = 0;
  let res = 0;
  for (let i = 0; i < gas.length; i++) {
    total = total + (gas[i] - cost[i]);
    if (total < 0) {
      total = 0;
      res = i + 1;
    }
  }
  return res;
};
