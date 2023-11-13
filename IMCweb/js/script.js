import { modal } from './modal.js'

const form = document.querySelector('form')
const inputHeight = document.querySelector('#height')
const inputWeight = document.querySelector('#weight')

// Arrow funtion
form.onsubmit = (event) => { 
  event.preventDefault()
  
  const height = inputHeight.value
  const weight = inputWeight.value

  const result = IMC(weight, height)
  const message = `Seu IMC e de ${result}`

  modal.message.innerText = message
  modal.open()

  console.log(result)
}

function IMC(weight, height) { 
  return (weight/ ((height / 100 ) ** 2)).toFixed(2)
}


