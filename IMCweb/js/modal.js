export const modal = { // objeto literal
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  btnClose: document.querySelector('.modal button.close'),

  open() {
    modal.wrapper.classList.add('open')
  },

  close() {
    modal.wrapper.classList.remove('open')
  }

}

// Fechar modal ao clicar no X
modal.btnClose.onclick = () => {
  modal.close()
}


// Fechar modal pelo teclado
window.addEventListener('keydown', event => {
  
  if(event.key === 'Escape') { 
    modal.close()
  }
})