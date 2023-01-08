const canSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;
  for (let i = 0; i < numbers.length; i++) {
    let remainder = target - numbers[i];
    if (canSum(remainder, numbers, memo)) memo[target] = true;
    return true;
  }
  memo[target] = false;
  return false;
};

console.log(canSum(7, [5, 9, 3, 11]));

module.exports = canSum;
