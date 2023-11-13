import { AlertError } from './alert.error.js'
import { modal } from './modal.js'
import { IMC, notANumber } from './utils.js'


const form = document.querySelector('form')
const inputHeight = document.querySelector('#height')
const inputWeight = document.querySelector('#weight')

// Arrow funtion
form.onsubmit = (event) => { 
  event.preventDefault()
  
  const height = inputHeight.value
  const weight = inputWeight.value

  const showAlertError = notANumber(weight) || notANumber(height) 
   
  if(showAlertError) { 
    AlertError.open()
    return
  }

  AlertError.close()
  


  const result = IMC(weight, height)
  const message = `Seu IMC e de ${result}`

  modal.message.innerText = message
  modal.open()

  console.log(result)
}

inputHeight.oninput = () => AlertError.close() 
inputWeight.oninput = () => AlertError.close()
