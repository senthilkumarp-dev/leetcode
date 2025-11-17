class Solution {
  // Function to find the maximum points among all the possible ones.
  maximumPoints(arr) {
    let task = [];
    for (let i = 0; i < 3; i++) {
      let maxi = 0;
      for (let j = 0; j < 3; j++) {
        if (j !== i) {
          maxi = Math.max(maxi, arr[0][j]);
        }
      }
      task.push(maxi);
    }
    for (let day = 1; day < arr.length; day++) {
      let newTask = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        let maxi = 0;
        for (let j = 0; j < 3; j++) {
          if (j !== i) {
            maxi = Math.max(maxi, arr[day][j] + task[j]);
          }
        }
        newTask[i] = maxi;
      }
      task = newTask;
    }
    return Math.max(...task);
  }
}
