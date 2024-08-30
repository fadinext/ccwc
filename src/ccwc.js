const fs = require("fs");

class CCWC {
  /**
   * @param {String[]} argv
   * @param {String=} stdin
   */
  execute(argv) {
    let showBytes,
      showLines,
      showWords,
      showCharacters = false;



    let optionsSupplied = 0;
    let fileNameWasProvided = false;
    let i = 2;
    while (i < argv.length) {
      const command = argv[i];
      switch (command) {
        case "-c":
          showBytes = true;
          optionsSupplied++;
          break;
        case "-l":
          showLines = true;
          optionsSupplied++;
          break;
        case "-w":
          showWords = true;
          optionsSupplied++;
          break;
        case "-m":
          showCharacters = true;
          optionsSupplied++;
          break;
        default:
          if (command.charAt(0) === "-") {
            throw new Error(`Invalid option: ${command}`);
          }
          fileNameWasProvided = true;
      }
      i++;
    }
    const isDefault = !showBytes && !showWords && !showLines && !showCharacters;

    const filename = fileNameWasProvided
      ? argv[2 + (isDefault ? 0 : optionsSupplied)]
      : "";
    const file = fileNameWasProvided
      ? this.#readFile(filename)
      : Buffer.from(fs.readFileSync(process.stdin.fd, "utf-8"));

      fs.readFileSync(process.stdin.fd, "utf-8")
    let result = "";
    const paddingTab = optionsSupplied > 1 || isDefault ? " " : "";

    if (showLines || isDefault) {
      const numberOfLines = this.#countLines(file);
      result += paddingTab + numberOfLines;
    }

    if (showWords || isDefault) {
      const numberOfWords = this.#countWords(file);
      result += paddingTab + numberOfWords;
    }

    if (showBytes || isDefault) {
      const bytesLength = this.#countBytes(file);
      result += paddingTab + bytesLength;
    }

    if (showCharacters) {
      const numberOfCharacters = this.#countCharacters(file);
      result += paddingTab + numberOfCharacters;
    }

    if (fileNameWasProvided) {
      result += ` ${filename}`;
    }

    return result;
  }

  #countBytes = require("./functions/countBytes");
  #readFile = require("./functions/readFile");
  #countLines = require("./functions/countLines");
  #countWords = require("./functions/countWords");
  #countCharacters = require("./functions/countCharacters");
}

module.exports = CCWC;
