const btnCalcular = document.getElementById('btnCalcular')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')


function calcularIMC() { 
const peso = parseFloat(document.getElementById('peso').value)
const altura = parseFloat(document.getElementById('altura').value)

const imc = (peso / (altura * altura)).toFixed(2);

screen1.classList.add('hide')
screen2.classList.remove('hide')

screen2.querySelector('h1').innerHTML = `Seu IMC e de ${imc}`

}

btnCalcular.addEventListener('keydown', calcularIMC)
