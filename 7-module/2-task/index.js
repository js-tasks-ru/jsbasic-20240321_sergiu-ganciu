import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = this.#render();
  }

  #template() {
    return  `<!--Корневой элемент Modal-->
    <div class="modal">
      <!--Прозрачная подложка перекрывающая интерфейс-->
      <div class="modal__overlay"></div>

      <div class="modal__inner">
        <div class="modal__header">
          <!--Кнопка закрытия модального окна-->
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>

          <h3 class="modal__title">
          </h3>
        </div>

        <div class="modal__body">
        </div>
      </div>

    </div>`
  }
  #removeModal() {
    this.elem.remove();
    document.body.classList.remove('is-modal-open');
    document.removeEventListener("keydown", this.#closeOnKey);
  }

  #closeOnClick = (event) => {
    const target = event.target;

    if (target.closest("button") && target.closest("button").classList.contains("modal__close")) {
      this.#removeModal();
    }
  }

  #closeOnKey = (event) => {
    if (event.code === 'Escape') {
      this.#removeModal();
    }
  }

  #render() {
    this.elem = createElement(this.#template());
    this.elem.addEventListener("click", this.#closeOnClick);
    document.addEventListener("keydown", this.#closeOnKey);

    return this.elem;
  }

  setTitle(title){
    this.elem.querySelector('.modal__title').innerText += title;
  }

  setBody(body) {
    const modalBody = this.elem.querySelector('.modal__body');
    
    modalBody.appendChild(body);
  }

  open(){
    document.body.classList.add('is-modal-open');
    document.body.appendChild(this.elem);
  }

  close(){
    this.#removeModal();
  }
}
