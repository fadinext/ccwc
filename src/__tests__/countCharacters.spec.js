const testString = "你们好āa";

const countCharacters = require("../functions/countCharacters");

describe("Count characters function", () => {
  it("Should count 0 characters on empty string", () => {
    expect(countCharacters(Buffer.from(""))).toBe(0);
  });

  it("Should count 5 characters on provided multi-byte test string", () => {
    expect(countCharacters(Buffer.from(testString))).toBe(5);
  });

  it("Should count 1 characters on provided multi-byte test string", () => {
    expect(countCharacters(Buffer.from("⭐"))).toBe(1);
  });
});
