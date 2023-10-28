let result = Number(prompt("Adivinhe um numero de 0 a 10"))
const RANDOMNUMBER = Math.round(Math.random() * 10)
const MATCH = result == RANDOMNUMBER 

let xTentativas = 1; 

while(result != RANDOMNUMBER ) { 
  result = prompt(('Error: Tente novamente:'))
  xTentativas++
}


alert(`Parabens, Voce acertou!! em ${xTentativas} Tentivas:`)

// console.log(RESULT, RANDOMNUMBER, MATCH)