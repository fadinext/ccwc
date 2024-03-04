/**
 * @param {Buffer} buffer
 * @returns {number}
 */
function countWords(buffer) {
  const asString = buffer.toString();

  let words = 0;
  let previousWasWord = false;
  for (let i = 0; i < asString.length; i++) {
    const character = asString[i];

    const charCode = character.charCodeAt(0);

    const whitespaceCharacterCodes = [32, 9, 13, 10];
    const isWhitespace = whitespaceCharacterCodes.includes(charCode);

    if (!isWhitespace && !previousWasWord) {
      words += 1;
    }

    previousWasWord = !isWhitespace;
  }

  return words;
}

module.exports = countWords;
