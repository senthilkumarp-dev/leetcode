var ExamTracker = function () {
  this.timeArr = [];
  this.scoreArr = [];
  this.presum = [];
};

/**
 * @param {number} time
 * @param {number} score
 * @return {void}
 */
ExamTracker.prototype.record = function (time, score) {
  this.timeArr.push(time);
  this.scoreArr.push(score);
  if (this.presum.length) {
    this.presum.push(this.presum[this.presum.length - 1] + score);
  } else {
    this.presum.push(score);
  }
};

/**
 * @param {number} startTime
 * @param {number} endTime
 * @return {number}
 */
ExamTracker.prototype.totalScore = function (startTime, endTime) {
  if (this.timeArr.length === 0) return 0;

  // helper: binary search for last index <= time
  const getIndex = (time) => {
    let l = 0,
      r = this.timeArr.length - 1,
      ans = -1;
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (this.timeArr[mid] <= time) {
        ans = mid;
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return ans; // -1 means all times > target
  };

  let endIdx = getIndex(endTime);
  let startIdx = getIndex(startTime - 1);

  if (endIdx === -1) return 0;

  let total = this.presum[endIdx];
  if (startIdx !== -1) total -= this.presum[startIdx];

  return total;
};

/**
 * Your ExamTracker object will be instantiated and called as such:
 * var obj = new ExamTracker()
 * obj.record(time,score)
 * var param_2 = obj.totalScore(startTime,endTime)
 */
