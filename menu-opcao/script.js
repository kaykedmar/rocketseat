let option;
let items = []

while (option != 4) {

  option = Number(prompt(`Olá usúario! Digite o numero da opcao abaixo

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Retirar item
  4. Sair do programa
`))

  switch (option) {
    case 1:
      let item = prompt("Digite o nome do item")
      items.push(item)
      break

    case 2:
      if (items.length === 0) {
        alert('Nenhum item cadastrado!')
      }
      else {
        alert(items)
      }
      break

    case 3:
      if (items.length === 0) {
        alert('Nenhum item para retirar!')
      }

      else {
        items.pop()
        alert('Item Retirado do carrinho!!')
      }
      break

    case 4:
      alert('Good Bye')
      break
    default:
      alert('Opçao invalida!')
      break
    }
    console.log(option, items)
  }

 

