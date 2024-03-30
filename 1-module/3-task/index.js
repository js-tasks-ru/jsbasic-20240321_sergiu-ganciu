/**
 * Convert first character to uppercase
 * @param {string | null} string
 * @returns {string}
 */
function ucFirst(str) {
  let result;
  let string_len = str.length
  
  if (string_len == 0) {
    result = str;
  } else if (string_len == 1){
    result = str.toUpperCase()
  } else {
    result = str[0].toUpperCase() + str.slice(1)
  }

  return result
}
