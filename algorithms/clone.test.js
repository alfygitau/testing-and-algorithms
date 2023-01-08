const clone = require("./clone");

test("checking the clone of an array", () => {
  expect(clone([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(clone([1, 2, 3, 4, 5])).not.toBe([1, 2, 3, 4, 5]);
});
