/**
 * Show user name and salary based on user's age
 * @param {object} users
 * @param {integer} age
 * @returns {string}
 */
function showSalary(users, age) {
  return users.filter((user) => user.age <= age)
     .map(user => user.name + ', ' + user.balance).join("\n");
}