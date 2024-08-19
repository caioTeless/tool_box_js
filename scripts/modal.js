const modal = document.querySelector(".modal-container");
const button = document.querySelector(".btn-modal");
const buttonClose = document.querySelector(".close-modal");

button.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.add("active-modal");
  modal.addEventListener("click", closeModal);
  buttonClose.addEventListener("click", closeModal);
}

function closeModal(event) {
  if (event.target === modal || event.target === buttonClose) {
    modal.classList.remove("active-modal");

    modal.removeEventListener("click", closeModal);
    buttonClose.removeEventListener("click", closeModal);
  }
}
