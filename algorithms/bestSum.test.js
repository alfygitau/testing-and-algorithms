const bestSum = require("./bestSum");

describe("bestSum", () => {
  test("result of bestSum", () => {
    let res = bestSum(8, [2, 3, 5]);
    expect(res.sort()).toEqual([3, 5].sort());
  });
});
