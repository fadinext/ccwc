const CCWC = require("../ccwc");

const ccwc = new CCWC();

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Initial implementation with only "-c" option and reading from file', () => {
  it("Should throw error on missing file", () => {
    expect(() =>
      ccwc.execute(["", "", "-c", "./src/__tests__/test2.txt"])
    ).toThrow("ENOENT: The supplied file does not exist.");
  });

  it("Should throw error on invalid option", () => {
    expect(() => ccwc.execute(["", "", "-l", ""])).toThrow(
      "Invalid option: -l"
    );
  });

  it('Should return "136" when called with "-c" and supplied test file', () => {
    const spy = jest.spyOn(ccwc, "execute");
    const success = ccwc.execute(["", "", "-c", "./src/__tests__/test.txt"]);
    expect(spy).toHaveBeenCalled();
    expect(success).toBe("136");
  });
});
