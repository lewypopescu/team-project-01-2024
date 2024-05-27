(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[franchise-modal-open]"),
    closeModalBtn: document.querySelector("[franchise-modal-close]"),
    modal: document.querySelector("[franchise-modal]"),
  };
  refs.openModalBtn.forEach((el) => el.addEventListener("click", toggleModal));
  refs.closeModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
