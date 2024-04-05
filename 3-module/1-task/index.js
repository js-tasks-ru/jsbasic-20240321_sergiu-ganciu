/**
 * Get users' names
 * @param {object} users
 * @returns {object}
 */
function namify(users) {
  return users.map(user => user.name);
}
