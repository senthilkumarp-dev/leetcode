var nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const nextGreaterMap = new Map();

  // Build the map using Monotonic Stack
  for (let num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      nextGreaterMap.set(stack.pop(), num);
    }
    stack.push(num);
  }

  const result = [];
  for (let num of nums1) {
    result.push(nextGreaterMap.get(num) ?? -1);
  }

  return result;
};
