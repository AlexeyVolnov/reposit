'use strict';
let buttonModalWindow = document.querySelectorAll(`[class^='show-modal-window']`);
let overley = document.querySelector('.overlay');
let modalWindow = document.querySelector('.modal-window');
let buttonCloseModal = document.querySelector('.close-modal-window');

overley.addEventListener('click', hiddenModal);
for (let modalWindowElement of buttonModalWindow) {
  modalWindowElement.addEventListener('click', showModal);
}
document.addEventListener('keydown', hiddenModal);
buttonCloseModal.addEventListener('click', hiddenModal);

function hiddenModal(event) {
  overley.classList.add('hidden')
  modalWindow.classList.add('hidden')
}
function showModal() {
  overley.classList.remove('hidden');
  modalWindow.classList.remove('hidden');
}
