//Variaveis
const randomNumber = Math.round(Math.random() * 10)

const btnTry = document.getElementById('btnTry')
const btnAgain = document.getElementById('btnAgain')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let trys = 1

btnTry.addEventListener('click', handleClick)
btnAgain.addEventListener('click', toggleScreen)

// Funçao da pagina 1
function handleClick(event) {
  
  event.preventDefault()
  const inputNumber = document.getElementById('inputNumber').value

  if (Number(inputNumber) == randomNumber) {
    toggleScreen()
    screen2.querySelector('h2').innerHTML = `Parabens, Voce acertou em ${trys}
     tentativa(s) !: `

    trys = 1;
  }

  document.getElementById('inputNumber').value = ''
  trys++

  if (inputNumber == '') {
    screen2.querySelector('h2').innerHTML = 'Digite um numero Valido:'
  }
}

function handleResetClick() { 
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
  trys = 1
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}





