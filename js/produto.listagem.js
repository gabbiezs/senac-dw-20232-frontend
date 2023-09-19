async function buscarTodosFabricantes(){
  fetch('http://localhost:8080/api/fabricantes/todos')
  .then(resultado => resultado.json())
  .then(json => { 
      preencherTabela(json);
  });
}

async function cadastrar(){
  let options = {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({
          nome : document.getElementById("inputNome").value, 
          cnpj : document.getElementById("inputCnpj").value,
          cep : document.getElementById("inputCep").value, 
          cidade : document.getElementById("inputCidade").value,  
          uf : document.getElementById("inputUf").value, 
      })
  };
  const despesaUsuario = await fetch('http://localhost:8080/api/fabricantes', options);
  const despesaJson = await despesaUsuario.json();

  limpar();

}

function limparTabela(){
  document.getElementById("corpoTabela").innerHTML = "";
}

function preencherTabela(jsonFabricantes){
  this.limparTabela();

  var dadosTabelaFabricantes = document.getElementById('corpoTabela');

  for(let i = 0; i < jsonFabricantes.length; i++){
      let novaLinha = dadosTabelaFabricantes.insertRow();

      let celulaId = novaLinha.insertCell();
      celulaId.innerText = jsonFabricantes[i].id;

      let celulaNome = novaLinha.insertCell();
      celulaNome.innerText = jsonFabricantes[i].nome;

      let celulaCnpj= novaLinha.insertCell();
      celulaCnpj.innerText = jsonFabricantes[i].cnpj;

      let celulaCidade= novaLinha.insertCell();
      celulaCidade.innerText = jsonFabricantes[i].cidade;

      let celulaCep= novaLinha.insertCell();
      celulaCep.innerText = jsonFabricantes[i].cep;

      let celulaUf= novaLinha.insertCell();
      celulaUf.innerText = jsonFabricantes[i].uf;
  }
}

function mostrarTelaErro(){
  limpar();
  alert('Todos os campos devem estar preenchidos!');
}




