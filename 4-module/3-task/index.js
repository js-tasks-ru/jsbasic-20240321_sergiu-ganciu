/**
 * Style table rows
 * @param {object} table
 * @returns {}
 */
function highlight(table) {
  let statusRowIndex;
  let genderRowIndex;
  let ageRowIndex;
  
  //Get thead cell ids
  for (const headRow of table.tHead.rows[0].cells){
    if (headRow.innerHTML == "Status"){
      statusRowIndex = headRow.cellIndex;
    }
    else if (headRow.innerHTML == "Gender"){
      genderRowIndex = headRow.cellIndex;
    }
    else if (headRow.innerHTML == "Age"){
      ageRowIndex = headRow.cellIndex;
    }
  }
  
  //Set tbody styles depending on thead cell id
  for (const row of table.tBodies[0].rows){
    //Status row
    if (row.cells[statusRowIndex].getAttribute("data-available") == "true"){
      row.classList.add('available');
    }
    else if (row.cells[statusRowIndex].getAttribute("data-available") == "false"){
      row.classList.add('unavailable');
    }
    else {
      row.setAttribute("hidden", ""); 
    }
      
    //Gender row
    if (row.cells[genderRowIndex].innerHTML == "m"){
      row.classList.add('male');
    }
    else {
      row.classList.add('female');
    }
      
    //Age row
    if (Number(row.cells[ageRowIndex].innerHTML) < 18){
      row.setAttribute("style", "text-decoration: line-through");
    }
  }
}
