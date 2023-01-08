const add = (a, b) => {
  return a + b;
};

let animals = [
  "sheep",
  "cow",
  "goat",
  "donkey",
  "cat",
  "sheep",
  "goat",
  "goat",
  "cow",
  "donkey",
  "donkey",
];

let category = animals.reduce((acc, animal) => {
  if (acc[animal]) {
    acc[animal]++;
  } else {
    acc[animal] = 1;
  }
  return acc;
}, {});

console.log(category);

module.exports = add;
