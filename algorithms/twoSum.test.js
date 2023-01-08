const twoSum = require("./twoSum");

describe("two sum", () => {
  test("result of two sum", () => {
    expect(twoSum([1, 2, 3, 4], 3)).toEqual([0, 1]);
  });
});
