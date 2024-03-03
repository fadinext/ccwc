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
  #readFile = require("./functions/readFile");
}

module.exports = CCWC;
