const maxSub = (numbers) => {
  let curSum = numbers[0];
  let maxSum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    curSum = Math.max(curSum + numbers[i], numbers[i]);
    console.log(curSum);
    maxSum = Math.max(curSum, maxSum);
  }
  return maxSum;
};

console.log(maxSub([-2, 1, 1, -3, 4, -2, 5]));

// kadane's algorithm
