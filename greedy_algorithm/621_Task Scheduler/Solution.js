/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let len = tasks.length;
  let freq = Array(26).fill(0);
  let maxFreq = 0;
  for (let c of tasks) {
    let idx = c.charCodeAt() - "A".charCodeAt();
    freq[idx] += 1;
    maxFreq = Math.max(freq[idx], maxFreq);
  }
  let countOfMax = 0;
  for (let i = 0; i < 26; i++) {
    if (freq[i] == maxFreq) countOfMax++;
  }
  return Math.max((maxFreq - 1) * (n + 1) + countOfMax, len);
};
