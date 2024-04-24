/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  elem = null;
  #rows = []

  constructor(rows) {
    this.#rows = rows || this.#rows;
    this.elem = this.#render();
  }

  #template() {
    return `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${
          this.#rows.map(value => 
            `<tr>
              <td>${value.name}</td>
              <td>${value.age}</td>
              <td>${value.salary}</td>
              <td>${value.city}</td>
              <td><button class="js-remove-button">X</button></td>
            </tr>`
          ).join('\n')
        }
      </tbody>
    `
  }

  #onRemoveClick = (event) => {
    const target = event.target;
    const row = target.closest("tr");

    if (!target.classList.contains("js-remove-button") || !row) {
      return;
    }

    row.remove();
  }
  
  #render() {
    this.elem = document.createElement("table");
    
    this.elem.innerHTML = this.#template();

    this.elem.addEventListener('click', this.#onRemoveClick)

    return this.elem;
  }
}
