const reverseString = require("./reverse");

describe("reverse", () => {
  test("reverse a string", () => {
    let res = reverseString("hello");
    expect(res).toBe("olleh");
  });
});
