const howSum = require("./howSum");

describe("howSum", () => {
  test("result of how sum", () => {
    let res = howSum(7, [5, 3, 4, 6, 7]);
    expect(res).toEqual([4, 3]);
  });
});
