class CCWC {
  /**
   * @param {String[]} argv
   */
  execute(argv) {
    const command = argv[2];

    if (command !== "-c") {
      throw new Error(`Invalid option: ${command}`);
    }

    const file = this.#readFile(argv[3]);
    const bytesLength = this.#countBytes(file);
    return `${bytesLength}`;
  }

  #countBytes = require("./functions/countBytes");

  /**
   * @param {String} fileName
   */
  #readFile(fileName) {
    const fs = require("fs");
    const path = require("path");
    const filePath = path.resolve(__dirname, "..", fileName);
    const fileExists = fs.existsSync(filePath);

    if (!fileExists) {
      throw new Error("ENOENT: The supplied file does not exist.");
    }

    return fs.readFileSync(filePath);
  }
}

module.exports = CCWC;
