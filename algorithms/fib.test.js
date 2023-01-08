const fib = require("./fib");

describe("fib test", () => {
  test("result of a fib test", () => {
    let res = fib(6);
    expect(res).toBe(8);
  });
});
