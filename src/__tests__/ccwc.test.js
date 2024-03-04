const CCWC = require("../ccwc");

const ccwc = new CCWC();

afterEach(() => {
  jest.restoreAllMocks();
});

const testFilePath = "./src/__tests__/test.txt";

describe('Initial implementation with only "-c" option and reading from file', () => {
  it("Should throw error on missing file", () => {
    expect(() =>
      ccwc.execute(["", "", "-c", "./src/__tests__/test2.txt"])
    ).toThrow("ENOENT: The supplied file does not exist.");
  });

  it("Should throw error on invalid option", () => {
    expect(() => ccwc.execute(["", "", "-P", testFilePath])).toThrow(
      "Invalid option: -P"
    );
  });

  it('Should return "136" when called with "-c" and supplied test file', () => {
    const spy = jest.spyOn(ccwc, "execute");
    const success = ccwc.execute(["", "", "-c", testFilePath]);
    expect(spy).toHaveBeenCalled();
    expect(success).toBe("136");
  });
});

describe("Option to count number of lines: '-l'", () => {
  it('Should return "3" when called with "-l" and supplied test file', () => {
    const spy = jest.spyOn(ccwc, "execute");
    const success = ccwc.execute(["", "", "-l", testFilePath]);
    expect(spy).toHaveBeenCalled();
    expect(success).toBe("3");
  });
});

describe("Option to count number of words: '-w'", () => {
  it('Should return "27" when called with "-w" and supplied test file', () => {
    const spy = jest.spyOn(ccwc, "execute");
    const success = ccwc.execute(["", "", "-w", testFilePath]);
    expect(spy).toHaveBeenCalled();
    expect(success).toBe("27");
  });
});
