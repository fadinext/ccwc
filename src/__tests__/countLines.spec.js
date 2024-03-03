const countLines = require("../functions/countLines");

describe("countLines function", () => {
  it("Should return 1 on empty string", () => {
    expect(countLines(Buffer.from(""))).toBe(1);
  });

  it("Should return 2", () => {
    expect(countLines(Buffer.from("Hello\nWorld"))).toBe(2);
  });

  it("Should return 3", () => {
    expect(
      countLines(
        Buffer.from(`Hello \n 
        world`)
      )
    ).toBe(3);
  });
});
