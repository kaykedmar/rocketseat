let option;
let items = []; 

while (option != 4) { 

  option = Number(prompt(`Olá usúario! Digite o numero da opcao abaixo

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Retirar item
  4. Sair do programa` ))


  switch(option) { 
    case 1: 
    let item =  prompt('Digite o nome do Item a ser cadastrado')
    items.push(item)
    break

    case 2: 
    
    if (items.length == 0) { 
      alert('Nenhum item cadastrado') 
    } 
    else { 
      alert(items)
    }
    break
    case 3: 
    if (items.length === 0) { 
      alert('Nenhum item para retirar.') 
    }
     else { 
        alert('Item Retirado:')
        items.pop(items)
    }
    break

    case 4:
      let question = prompt('Sair do Programa?');

      if (question.toLowerCase() === 'sim') {
        alert('Good Bye');
      } 
      break;

    default: 
    alert('Opçao Invalida, Tente novamente')
  } 
  
  console.log(items, option)
} 

