/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  let a = n;
  a = a.toString();
  while (a.length > 1) {
    for (let i = 0; i < a.length; i++) {
      sum += Number(a[i]);
    }
    a = sum.toString();
    sum = 0;
  }
  return Number(a);
}

module.exports = getSumOfDigits;
