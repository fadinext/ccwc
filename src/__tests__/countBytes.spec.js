const countBytes = require("../functions/countBytes");

describe("countBytes function", () => {
  it('Should return 10 for "Hello world."', () => {
    expect(countBytes(Buffer.from(""))).toBe(0);
    expect(countBytes(Buffer.from("Hello world"))).toBe(11);
  });
});
