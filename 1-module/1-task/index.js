/**
 * Get factorial value
 * @param {int} number
 * @return {int}
 */
function factorial(number) {
  // check if number is integer
  if (!Number.isInteger(number)){
    throw new Error('Parameter is not a number!');
  }
  // check if number value is equal to 0 or 1
  if(number == 0 || number == 1) return 1;

  let factor = number;

  while(factor > 1){
    factor -= 1;
    number = number * factor;
  }

  return number;
}
