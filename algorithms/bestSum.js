const bestSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;
  let shortest = null;
  for (let num of numbers) {
    let remainder = target - num;
    let res = bestSum(remainder, numbers, memo);
    if (res !== null) {
      let combination = [...res, num];
      if (shortest === null || combination.length < shortest.length) {
        shortest = combination;
      }
    }
  }
  memo[target] = shortest;
  return memo[target];
};

console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));

module.exports = bestSum;
