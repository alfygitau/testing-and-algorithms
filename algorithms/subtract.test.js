const subtract = require("./subtract");

test("properly subtract parameters", () => {
  expect(subtract(10, 2)).toBe(8);
});
