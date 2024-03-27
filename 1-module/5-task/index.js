/**
 * Truncate string
 * @param {string | null} string
 * @param {int | null} number
 * @returns {string}
 */
function truncate(str, maxlength) {
  let strLen = str.length;
  let result;

  if (!maxlength) return '';

  if (strLen > maxlength) {
    result = str.slice(0, maxlength-1) + '…';
  } else {
    result = str;
  }
  
  return result;
}