class CCWC {
  /**
   * @param {String[]} argv
   */
  execute(argv) {
    let showBytes,
      showLines,
      showWords,
      showCharacters = false;

    let optionsSupplied = 0;

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
            const x = command;
            throw new Error(`Invalid option: ${x}`);
          }
      }
      i++;
    }
    const isDefault = !showBytes && !showWords && !showLines && !showCharacters;

    const filename = argv[2 + (isDefault ? 0 : optionsSupplied)];
    const file = this.#readFile(filename);
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

    result += ` ${filename}`;

    return result;
  }

  #countBytes = require("./functions/countBytes");
  #readFile = require("./functions/readFile");
  #countLines = require("./functions/countLines");
  #countWords = require("./functions/countWords");
  #countCharacters = require("./functions/countCharacters");
}

module.exports = CCWC;
