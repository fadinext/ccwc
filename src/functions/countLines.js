/**
 * @param {Buffer} buffer
 * @returns {number}
 */
function countLines(buffer) {
  return buffer.toString().split("\n").length;
}

module.exports = countLines;
