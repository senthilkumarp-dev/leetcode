var lastStoneWeight = function (stones) {
  stones.sort((a, b) => a - b);
  while (stones.length > 1) {
    let y = stones.pop();
    let x = stones.pop();
    y = y - x;
    stones.push(y);
    stones.sort((a, b) => a - b);
  }
  return stones.pop();
};