
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
      itensTable.table = numberTable
      itensTable.choop = typeChoop;
      itensTable.bebidas = typeBebidas;
      itensTable.food = typeFood;







// CODIGO MODIFICADO 21/06/2023 INSERINDO ELEMENTO DENTRO DE TABELA

      // let tableBody = document.getElementById("tableBody");
      // let tableTd = document.querySelector(".tableTd");
      // const td = document.createElement("td")
      // const tipoBebida = document.createTextNode(typeBebidas);
      // td.appendChild(tipoBebida);
      // tableBody.appendChild(tableTd)
      // tableTd.appendChild(td)

      // td.innerHTML = tipoBebida.value;

      let tableBody = document.getElementById("tableBody");
      const td = document.createElement("td");
      const tipoBebida = document.createTextNode(typeBebidas);
      td.appendChild(tipoBebida);
      tableBody.appendChild(td);



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

      Swal.fire(
        'Mesa Removida!',
        'Mesa fechada com sucesso',
        'success'
      )

      document.getElementById('numberTable').value = "";
  }else{
    alert("Mesa invalida!!")
  }
}

function description(){
  const description= document.getElementById('description')
   const createTextarea= document.createElement("textarea")
   createTextarea.id="textDescription"
   createTextarea.rows=2
   createTextarea.cols= 33
   description.appendChild(createTextarea)
}



