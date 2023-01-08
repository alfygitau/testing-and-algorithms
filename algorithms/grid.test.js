const gridTraveller = require("./gridTraveller");

describe("grid", () => {
  test("result of grid traveller", () => {
    let res = gridTraveller(2, 3);
    expect(res).toBe(3);
  });
});
