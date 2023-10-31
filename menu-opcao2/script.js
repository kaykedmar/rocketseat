    let option;
    let items = [];

    while (option != 4) {
      option = Number(prompt(`Olá usuário! Digite o número da opção abaixo:

        1. Cadastrar um item na lista
        2. Mostrar itens cadastrados
        3. Retirar item
        4. Sair do programa`));

  switch (option) {
    case 1:

      let item = prompt('Digite o nome do item a ser cadastrado');
      items.push(item);

      if (item === '') {
        alert('Cadastro invalido:')
      }
      break;

    case 2:

      if (items.length === 0) {
        alert('Nenhum item cadastrado');
      } else {
        alert(items);
      }
      break;

    case 3:

      if (items.length === 0) {
        alert('Nenhum item para retirar.');
      }
      else {
        alert(`item retirado: ${items.pop()}`);
      }
      break;

    case 4:

      let question = prompt('Sair do Programa?');

      if (question.toLowerCase() === 'sim') {
        alert('Good Bye');
      }
      break;

    default:
      alert('Opção inválida, tente novamente');
  }

  console.log(items, option);
}


