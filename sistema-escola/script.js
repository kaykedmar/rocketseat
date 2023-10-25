let nome = prompt('Qual seu nome?')

const notes = Number(prompt('Nota do Primeiro Bimestre'))
const notesTwo = Number(prompt('Nota do Segundo Bimestre'))
const notesThree = Number(prompt('Nota do Terceiro Bimestre'))

let somaDasNotas = (notes + notesTwo+ notesThree) / 3

// .toFixed Usada para determinada quantas casas decimais vai ter o resultado. 
somaDasNotas = somaDasNotas.toFixed(1)


if (somaDasNotas > 6) { 
  console.log(`Olá ${nome}, Sua nota foi de: ${somaDasNotas}, Parabens!!!`)
} else { 
  console.log(`${nome}, sua media foi de: ${somaDasNotas}, Estude para recuperação...`)
}





  
