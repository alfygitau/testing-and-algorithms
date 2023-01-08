const canSum = require("./conSum");

describe("canSum", () => {
  test("the result of canSum function", () => {
    let res = canSum(7, [5, 4, 3, 7]);
    expect(res).toBe(true);
  });
});
