/**
 * @param {String} fileName
 * @returns {Buffer} File buffer
 */
function readFile(fileName) {
  const fs = require("fs");
  const path = require("path");
  const filePath = path.resolve(__dirname, "..", "..", fileName);
  const fileExists = fs.existsSync(filePath);

  if (!fileExists) {
    throw new Error("ENOENT: The supplied file does not exist.");
  }

  return fs.readFileSync(filePath);
}

module.exports = readFile;
