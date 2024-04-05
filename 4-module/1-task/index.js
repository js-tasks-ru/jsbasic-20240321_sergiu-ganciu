/**
 * Display friends list in html
 * @param {object} friends
 * @returns {object}
 */
function makeFriendsList(friends) {
  let list = document.createElement("ul");
  
  for (let friend in friends){
    let text = friends[friend].firstName + " " + friends[friend].lastName;
    list.innerHTML += "<li>" + text + "</li>";
  }
  
  return list;
}