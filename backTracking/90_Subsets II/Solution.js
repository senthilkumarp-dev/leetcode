/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a - b);
    let res = [];

    let backTrack = (start, curr) => {
        res.push([...curr]);

        for (let i = start; i < nums.length; i++) {
            // skip duplicates on the same level
            if (i > start && nums[i] === nums[i - 1]) continue;

            curr.push(nums[i]);
            backTrack(i + 1, curr);
            curr.pop();
        }
    };

    backTrack(0, []);
    return res;
};