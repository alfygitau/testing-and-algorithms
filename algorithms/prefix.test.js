const commonPrefix = require("./prefix");

describe("testing prefix", () => {
  test("res of common prefix", () => {
    const res = commonPrefix(["flo", "fla"]);
    expect(res).toBe("fl");
  });
});
