var removeDuplicateLetters = function (s) {
  let lastIndex = {};
  let visited = new Set();
  let stack = [];

  // Store last occurrence of each character
  for (let i = 0; i < s.length; i++) {
    lastIndex[s[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    let c = s[i];

    if (visited.has(c)) continue;

    // Ensure lexicographical order by popping larger chars
    while (
      stack.length > 0 &&
      stack[stack.length - 1] > c &&
      lastIndex[stack[stack.length - 1]] > i
    ) {
      visited.delete(stack.pop());
    }

    visited.add(c);
    stack.push(c);
  }

  return stack.join('');
};