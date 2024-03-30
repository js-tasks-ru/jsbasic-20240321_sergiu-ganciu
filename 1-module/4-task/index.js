/**
 * Check string on spam
 * @param {string | null} string
 * @returns {boolean}
 */
function checkSpam(str) {
  let convertStr = str.toLowerCase();

  if (convertStr.indexOf('1xbet') == -1 && 
      convertStr.indexOf('xxx' ) == -1) {
    return false;
  }

  return true;
}