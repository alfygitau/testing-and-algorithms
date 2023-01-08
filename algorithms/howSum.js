const howSum = (target, numbers) => {
  if (target === 0) return [];
  if (target < 0) return null;
  for (let num of numbers) {
    let remainder = target - num;
    let result = howSum(remainder, numbers);
    if (result !== null) {
      return [...result, num];
    }
  }
  return null
};

console.log(howSum(7, [5, 3, 4, 6, 7]));

module.exports = howSum;
