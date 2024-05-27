(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[map-modal-open]"),
    closeModalBtn: document.querySelector("[map-modal-close]"),
    modal: document.querySelector("[map-modal]"),
  };
  refs.openModalBtn.forEach((el) => el.addEventListener("click", toggleModal));
  refs.closeModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();