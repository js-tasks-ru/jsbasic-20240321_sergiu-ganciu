/**
 * Add background color to the diagonal cell
 * @param {object} table
 * @returns {}
 */
function makeDiagonalRed(table) {
  let countRow = 0;
  
  for (const row of table.rows){
    let countCell = 0;
    
    for (const cell of row.cells){
      if (countRow == countCell){
        cell.style.backgroundColor = "red";
      }
      
      countCell++;
    }
    
    countRow++;
  }
}    