const sumAll = function (num1, num2) {
  let i;
  let sum = 0;
  if (num2 > num1) {
    for (i = num1; i <= num2; i++) {
      sum += i;
    }
  } else if (num1 > num2) {
    for (i = num2; i <= num1; i++) {
      sum += i;
    }
  }
  if (sum < 0) return "ERROR";
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
