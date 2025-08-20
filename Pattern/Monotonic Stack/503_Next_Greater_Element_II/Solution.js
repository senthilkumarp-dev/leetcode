/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
 const n = nums.length;
    const res = Array(n).fill(-1);   // default: no greater element
    const stack = [];                // stack stores indices

    // Traverse twice to simulate circular array
    for (let i = 0; i < 2 * n; i++) {
        const num = nums[i % n];     // current element in circular traversal

        // While current num is greater than the top of stack → update result
        while (stack.length && nums[stack[stack.length - 1]] < num) {
            const idx = stack.pop();
            res[idx] = num;
        }

        // Only push indices from first pass (0..n-1)
        if (i < n) {
            stack.push(i);
        }
    }
    return res;
};
