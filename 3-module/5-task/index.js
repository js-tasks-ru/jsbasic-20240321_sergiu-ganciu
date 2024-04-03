/**
 * Get min and max numbers in string
 * @param {string} str
 * @returns {object}
 */
function getMinMax(str) {
  let numberArr = str.split(' ').map(item => Number(item)).filter(item => !isNaN(item));

  return {
    'min': Math.min(...numberArr),
    'max': Math.max(...numberArr),
  }
}