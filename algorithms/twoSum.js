function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < target; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([2, 7, 10, 17], 17));

const twoSumNew = (nums, target) => {
  let storage = {};
  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) return [storage[num], index];
    storage[target - num] = index;
  }
};

console.log(twoSumNew([2, 7, 10, 17], 17));

const threeSum = (arr) => {
  let [solution, left, right] = [[], 0, arr.length - 1];
  if (arr.length < 3) return solution;
  arr.sort((a, b) => a - b);

  for (let [index, num] of arr.entries()) {
    if (num > 0) return solution;
    if (num === arr[index - 1]) continue;

    left = index + 1;
    right = arr.length - 1;
    let temp = 0;

    while (left < right) {
      temp = num + arr[left] + arr[right];

      if (temp === 0) {
        solution.push([num, arr[left], arr[right]]);
        left++;
        right--;

        while (left < right && arr[left] == arr[left - 1]) {
          left++;
        }
        while (left < right && arr[right] == arr[right + 1]) {
          right++;
        }
      } else if (temp > 0) {
        right--;
      } else if (temp < 0) {
        left++;
      }
    }
  }
  return solution;
};


console.log(threeSum([-5, -4, -1, 0 , 5]))
let arr = [
  [1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [0, 1, 0, 1, 0],
];

const loop = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    // console.log(grid[i]);
    for (let [index, num] of grid[i].entries()) {
      console.log(index, num);
      if (num === 1) {
        // console.log(num);
      }
    }
  }
};

console.log(loop(arr));

const generateParenthesis = (n) => {
  let solution = [];

  function generate(leftPCount, rightPCount, partial) {
    // base cases
    if (leftPCount > rightPCount) return;
    if (!leftPCount && !rightPCount) solution.push(partial);

    if (leftPCount > 0) generate(leftPCount - 1, rightPCount, partial + "(");
    if (rightPCount > 0) generate(leftPCount, rightPCount - 1, partial + ")");
  }
  generate(n, n, "");

  return solution;
};

console.log(generateParenthesis(4));

module.exports = twoSum;
