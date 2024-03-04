class CCWC {
  /**
   * @param {String[]} argv
   */
  execute(argv) {
    const command = argv[2];
    let result = "";

    const file = this.#readFile(argv[3]);

    switch (command) {
      case "-c":
        const bytesLength = this.#countBytes(file);
        result = bytesLength;
        break;
      case "-l":
        const numberOfLines = this.#countLines(file);
        result = numberOfLines;
        break;
      case "-w":
        const numberOfWords = this.#countWords(file);
        result = numberOfWords;
        break;
      default:
        throw new Error(`Invalid option: ${command}`);
    }

    return String(result);
  }

  #countBytes = require("./functions/countBytes");
  #readFile = require("./functions/readFile");
  #countLines = require("./functions/countLines");
  #countWords = require("./functions/countWords")
}

module.exports = CCWC;
