const CCWC = require("../ccwc");

const ccwc = new CCWC();

const mockStdin = require('mock-stdin')



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
    expect(success).toBe("136" + ` ${testFilePath}`);
  });
});

describe("Option to count number of lines: '-l'", () => {
  it('Should return "3" when called with "-l" and supplied test file', () => {
    const spy = jest.spyOn(ccwc, "execute");
    const success = ccwc.execute(["", "", "-l", testFilePath]);
    expect(spy).toHaveBeenCalled();
    expect(success).toBe("3" + ` ${testFilePath}`);
  });
});

describe("Option to count number of words: '-w'", () => {
  it('Should return "27" when called with "-w" and supplied test file', () => {
    const spy = jest.spyOn(ccwc, "execute");
    const success = ccwc.execute(["", "", "-w", testFilePath]);
    expect(spy).toHaveBeenCalled();
    expect(success).toBe("27" + ` ${testFilePath}`);
  });
});

describe("Option to count number of characters: '-m'", () => {
  it('Should return "136" when called with "-m" and supplied test file', () => {
    const spy = jest.spyOn(ccwc, "execute");
    const success = ccwc.execute(["", "", "-m", testFilePath]);
    expect(spy).toHaveBeenCalled();
    expect(success).toBe("136" + ` ${testFilePath}`);
  });
});

describe("Must support more than one option at a time", () => {
  it("Should support default option (i.e, equivalent to '-c -l -w')", () => {
    const spy = jest.spyOn(ccwc, "execute");
    const success = ccwc.execute(["", "", testFilePath]);
    expect(spy).toHaveBeenCalled();
    expect(success).toBe(" 3 27 136" + ` ${testFilePath}`);
  });

  it("Should support all options combined '-c -l -w'", () => {
    const spy = jest.spyOn(ccwc, "execute");
    const success = ccwc.execute(["", "", "-c", "-l", "-w", testFilePath]);
    expect(spy).toHaveBeenCalled();
    expect(success).toBe(" 3 27 136" + ` ${testFilePath}`);
  });

  it("Should support any combination of options", () => {
    const spy = jest.spyOn(ccwc, "execute");
    const success_cl = ccwc.execute(["", "", "-c", "-l", testFilePath]);
    const success_cw = ccwc.execute(["", "", "-c", "-w", testFilePath]);
    const success_wl = ccwc.execute(["", "", "-w", "-l", testFilePath]);
    expect(spy).toHaveBeenCalled();
    expect(success_cl).toBe(" 3 136" + ` ${testFilePath}`);
    expect(success_cw).toBe(" 27 136" + ` ${testFilePath}`);
    expect(success_wl).toBe(" 3 27" + ` ${testFilePath}`);
  });
});

describe("Read from standard input if no filename is specified", () => {
  it("Should read from stdin", () => {
    const spy = jest.spyOn(ccwc, "execute");


    const helper = (...args) => {
      const stdin = mockStdin.stdin()
      ccwc.execute(...args)
      stdin.send("Hello world!")
      stdin.end()
    }

    const success = helper(["", "", "-c", "-l", "-w"]);




    expect(spy).toHaveBeenCalled();
    expect(success).toBe(" 1 2 12");
  });

})