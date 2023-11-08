const form = document.querySelector('form')
const inputHeight = document.querySelector('#height')
const inputWeight = document.querySelector('#weight')



// objeto literal
const modal = { 

  wrapper: document.querySelector('.modal-wrapper'), 
  messagen: document.querySelector('.modal .title span'), 
  btnClose: document.querySelector('.modal button.close'),

  open() {
    modal.wrapper.classList.add('open')
   },

  close() { 
    modal.wrapper.classList.remove('open')
  }

}


// Arrow funtion
form.onsubmit = (event) => { 
  event.preventDefault()
  
  const height = inputHeight.value
  const weight = inputWeight.value

  const result = IMC(weight, height)
  const message = `Seu IMC e de ${result}`

  modal.messagen.innerText = message
  modal.open()

  console.log(result)


}

// Fechar modal ao clicar no X
modal.btnClose.onclick = () => { 
  modal.close()
}


function IMC(weight, height) { 
  return (weight/ ((height / 100 ) ** 2)).toFixed(2)
}


