const birthday = (s, d, m) => {
  let count = 0;
  for (let [index, num] of s.entries()) {
    let subArray = s.slice(index, index + m);
    if (subArray.length === m) {
      let sum = subArray.reduce((a, b) => a + b, 0);
      if (sum === d) {
        count++;
      }
    }
  }
  return count;
};

console.log(birthday([1, 2, 3, 2, 5], 5, 2))

const migratoryBirds = (arr) => {
  let countObject = {};
  let uniqueValues = [...new Set(arr)];
  console.log(uniqueValues)
  uniqueValues.forEach((elem) => {
    let filtered = arr.filter((num) => num === elem);
    console.log(filtered)
    let totalVal = filtered.length;
    // console.log(totalVal)
    countObject[elem] = totalVal;
  });
  let result = Object.entries(countObject).sort(([, a], [, b]) => b - a);
  console.log(result);
  return result[0][0];
};

// console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
