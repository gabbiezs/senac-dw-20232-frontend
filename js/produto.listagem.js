async function buscarTodosProdutos(){
    fetch('http://localhost:8080/api/produtos/todos')
    .then(resultado => resultado.json())
    .then(json => { 
        preencherTabela(json);
    });
}

// async function cadastrarDespesa(despesa){
//    let options = {
 //       method: "POST",
 //       headers: {"Content-type": "application/json"},
 //       body: JSON.stringify({
 //           idUsuario: despesa.idUsuario,
 //           descricao: despesa.descricao,
 //           valor: parseFloat(despesa.valor),
 //           dataVencimento: new Date(despesa.dataVencimento),
 //           dataPagamento: new Date(despesa.dataPagamento)
 //       })
 //   };
 //   const despesaUsuario = await fetch('http://localhost:8080/controle-gastos/rest/despesa/cadastrar', options);
 //   const despesaJson = await despesaUsuario.json();
 //   //tratamento do response aqui (despesaJson)
//}

// async function excluirPorCpf(){
//    let cpf = ""; //TODO pegar o cpf informado na tela

//      let options = {}
 //       method: "DELETE",
 //   };
 //   const excluirPessoa = await fetch('http://localhost:8080/api/pessoa/deletar-por-cpf/' + cpf, options);
 //     const resultado = await excluirPessoa.json();
//}

function preencherTabela(jsonProdutos) {
    var dadosTabelaProdutos = document.getElementById("corpoTabela");
  
    for(let i = 0; i < jsonProdutos.length; i++){
        let novaLinha = dadosTabelaProdutos.insertRow();

        let celulaId = novaLinha.insertCell();
        celulaId.innerText = jsonProdutos[i].id;

        let celulaNome = novaLinha.insertCell();
        celulaNome.innerText = jsonProdutos[i].nome;

        let celulaFabricante = novaLinha.insertCell();
        celulaFabricante.innerText = jsonProdutos[i].fabricanteDoProduto.nome;

        let celulaValor = novaLinha.insertCell();
        celulaValor.innerText = 'R$' + jsonProdutos[i].valor;

        let celulaPeso = novaLinha.insertCell();
        celulaPeso.innerText = jsonProdutos[i].peso;
    }
  }

  window.addEventListener('DOMContentLoaded', buscarProdutoSeletor());
  
  async function buscarProdutoSeletor() {
    fetch("http://localhost:8080/api/produtos/filtro", {
      method: "POST",
      body: JSON.stringify({
        nome: document.getElementById("produto").value,
        fabricante: document.getElementById("fabricante").value,
        cnpjFabricante: document.getElementById("cnpj").value,
        valorMinimo: document.getElementById("valor-min").value,
        valorMaximo: document.getElementById("valorMax").value,
        pesoMinimo: document.getElementById("pesoMin").value,
        pesoMaximo: document.getElementById("pesoMax").value,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((resultado) => resultado.json())
      .then((json) => {
        console.log(json);
        preencherTabela(json);
      });
  }
  
  function esconderFiltro() {
    document.getElementById('meuConteudo').classList.toggle('show');
  }
  
  window.onclick = (event) => {
    if(!event.target.matches('.btn-drop')) {
      var dropdowns = document.getElementsByClassName('dropdown-conteudo');
      dropdowns.forEach(item => {
        var openDropdown = dropdowns[item];
        if(openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      });
    }
  }