const countWords = require("../functions/countWords");

describe("countWords function", () => {
  it("Should return 0 for empty string", () => {
    expect(countWords("")).toBe(0);
  });

  it("Should return 0 for spaces only string", () => {
    expect(countWords("     ")).toBe(0);
    expect(countWords("         ")).toBe(0);
    expect(
      countWords(`  
            `)
    ).toBe(0);
  });

  it("Should return 2 for 'Hello world'", () => {
    expect(countWords("Hello world")).toBe(2);
  });

  it("Should return 3 for 'Hello world !'", () => {
    expect(countWords("Hello world !")).toBe(3);
  });

  it("Should return 2 for 'Hello world!'", () => {
    expect(countWords("Hello world")).toBe(2);
  });

  it("Should count numbers and symbols as words", () => {
    expect(countWords("  4 ! @")).toBe(3);
    expect(countWords("1    6 *( $")).toBe(4);
  });
});
