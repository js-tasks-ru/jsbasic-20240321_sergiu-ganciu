/**
 * Hide button on click
 * @returns {}
 */
function hideSelf() {
  const button = document.querySelector('.hide-self-button');
  button.addEventListener('click', () => {
    button.setAttribute("hidden", "");
  }, {once: true});
}
