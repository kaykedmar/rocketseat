const randomNumber = Math.round(Math.random() * 5)
let trys = 1
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')


// Funçao da pagina 1
function handleClick(event) { 
  event.preventDefault()
  
  const inputNumber = document.getElementById('inputNumber').value
 
  if (Number(inputNumber) == randomNumber) { 
    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    document.querySelector('.screen2 h2').innerHTML = `Parabens, Voce acertou em ${trys} tentativa(s) !: `

    console.log(`Parabens, Voce acertou em ${trys} tentativa(s) !: `)
    trys = 1;
  }  
  
  document.getElementById('inputNumber').value = ''
  trys++
  
  if (inputNumber == '')  { 
    alert('Error 404: Digite um numero Valido!')
  }

} 

const btnTry = document.getElementById('btnTry')
const btnAgain = document.getElementById('btnAgain')


btnTry.addEventListener('click', handleClick)
btnAgain.addEventListener('click', function() { 
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
})





// Funçao da pagina 2
// function playAgain(event) { 

//   screen1.classList.remove('hide')
//   screen2.classList.add('hide')

//   trys = 1;

// }


