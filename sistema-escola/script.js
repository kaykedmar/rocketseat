let nome = prompt('Qual seu nome?')

const notes = Number(prompt('Nota do Primeiro Bimestre'))
const notesTwo = Number(prompt('Nota do Segundo Bimestre'))
const notesThree = Number(prompt('Nota do Terceiro Bimestre'))

let somaDasNotas = notes + notesTwo + notesThree

const media = Math.round(somaDasNotas / 3);

console.log(`Ola ${nome}, Sua media foi ${media}`)


if (media === 10) {
  console.log('Você atingiu a nota máxima! Parabéns!!!');
} else if (media <=6) {
  console.log('Você foi reprovado :(');
} else if (media >= 7) {
  console.log('Você esta na media, Estude mais!!');
} else if (media <= 7 ) {
  console.log('Você foi reprovado :(');
} else { 
  console.log('Insira uma nota valida')
}

  
