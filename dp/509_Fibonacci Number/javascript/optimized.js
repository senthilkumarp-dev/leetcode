var fib = function (n) {
  if (n < 2) {
    return n;
  }
  let prev1 = 1;
  let prev2 = 0;
  for (let i = 2; i <= n; i++) {
    let curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
};
