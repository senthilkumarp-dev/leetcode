/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;
  for (let bill of bills) {
    if (bill == 5) {
      five++;
    } else if (bill == 10) {
      if (five) {
        five--;
        ten++;
      } else {
        return false;
      }
    } else {
      if (five && ten) {
        five--;
        ten--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
