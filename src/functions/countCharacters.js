/**
 * @param {Buffer} buffer
 */
function countCharacters(buffer) {
  let count = 0;

  for (let i = 0; i < buffer.length; i++) {
    const char = buffer[i];

    //You only count the characters that have the top two bits are not set to 10 (i.e., everything less that 0x80 or greater than 0xbf).
    //That's because all the characters with the top two bits set to 10 are UTF-8 continuation bytes.
    //https://stackoverflow.com/questions/7298059/how-to-count-characters-in-a-unicode-string-in-c
    if (char < 0x80 || char > 0xbf) {
      count++;
    }
  }

  return count;
}

module.exports = countCharacters;
