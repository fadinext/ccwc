const readFile = require("../functions/readFile");

describe("readFile function", () => {
  it("Should return error on non existing file", () => {
    expect(() => readFile("foo.txt")).toThrow(
      "ENOENT: The supplied file does not exist."
    );
  });

  it("Should read file succesfully", () => {
    expect(Buffer.isBuffer(readFile("./src/__tests__/test.txt"))).toBe(true);
  });
});
