/**
 * Filter numbers in range
 * @param {object} arr
 * @param {int} a
 * @param {int} b
 * @returns {object}
 */
function filterRange(arr, a, b) {
  return arr.filter(num => num >= a && num <= b);
}
