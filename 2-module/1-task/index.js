/**
 * Count salaries
 * @param {object} salaries
 * @returns {number}
 */
function sumSalary(salaries) {
  let totalSalaries = 0;

  for (let key in salaries) {
    if (Number.isFinite(salaries[key])) {
      totalSalaries += salaries[key];
    }
  }

  return totalSalaries;
}
