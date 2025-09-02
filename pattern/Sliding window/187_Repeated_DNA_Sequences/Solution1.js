var findRepeatedDnaSequences = function (s) {
  let map = {};
  let res = [];
  for (let i = 0; i <= s.length - 10; i++) {
    map[s.slice(i, i + 10)] = map[s.slice(i, i + 10)] ? map[s.slice(i, i + 10)] + 1 : 1;
  }
  for (const property in map) {
    if (map[property] > 1) {
      res.push(property)
    }
  }
  return res;
};