
function createTable() {
    const numberTable = document.getElementById('numberTable').value;
    const typeChoop = document.querySelector('select[name="typeChoop"]').value;
    const typeBebidas = document.querySelector('select[name="typeBebidas"]').value;
    const typeFood = document.querySelector('select[name="typeFood"]').value;
  
    const confirmation = confirm(`Cadastrar mesa ${numberTable}?`);
  
    if (confirmation) {
      
      Swal.fire(
        'Pedido concluido!',
        'Seus itens foram adicionados',
        'success'
      )
      const itensTable = {};
      itensTable.choop = typeChoop;
      itensTable.bebidas = typeBebidas;
      itensTable.food = typeFood;

  
      const listTable = document.getElementById('listTable');
      const itemList = document.createElement('li');
      itemList.className = 'item';
      itemList.id = `mesa-${numberTable}`;
      itemList.innerText = `Mesa (${numberTable}) - Itens:
       ${typeChoop}
       ${typeBebidas}
       ${typeFood}`;
      listTable.appendChild(itemList);

      // criar elemento "br" separando os elementos
      listTable.appendChild(document.createElement('br'))

      // Limpar os campos

      document.getElementById('numberTable').value=""
      document.getElementById('typeChoop').value=""
      document.getElementById('typeBebidas').value=""
      document.getElementById('typeFood').value=""

    }
  }
  function closeTable(){
    const removeNumber = document.getElementById('numberTable').value;
    const removeTable = document.getElementById(`mesa-${removeNumber}`);
  
    const confirmationRemove = confirm(`Deseja remover a mesa ${removeNumber}?`);
  
    if (confirmationRemove && removeTable) {
      removeTable.remove();
      document.getElementById('numberTable').value = "";
  }else{
    alert("Mesa invalida!!")
  }
}
  