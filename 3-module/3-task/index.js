/**
 * Camelize string
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let arrString = str.split('-');

  for (let string in arrString){
    if (string > 0){ 
      arrString[string] = arrString[string].charAt(0).toUpperCase() + arrString[string].slice(1);
    }
  }

  return arrString.join('');
}
