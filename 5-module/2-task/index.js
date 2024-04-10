/**
 * Hide div on button click
 * @returns {}
 */
function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  button.addEventListener('click', () => {
    const div = document.querySelector('#text');
    div.hasAttribute('hidden') ? div.removeAttribute('hidden') : div.setAttribute('hidden', '');
  });
}
