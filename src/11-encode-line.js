/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let string = '';
  let result = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      result++;
    } else if (result === 1) {
      string += str[i];
      result = 1;
    } else {
      string += result.toString() + str[i];
      result = 1;
    }
  }
  return string;
}

module.exports = encodeLine;
