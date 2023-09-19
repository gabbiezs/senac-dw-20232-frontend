// let prompt = require('prompt-sync')();
// let cepInformado = prompt('Qual o seu CEP? ');
// console.log('Cep: ' + cepInformado);
// //Chamando o metodo, ele irá rodar corretamente pois o node compila tudo e depois roda, em javascript puro isso daria erro pois está chamando um metodo ainda não criado.
// buscarCEP(cepInformado);

// async function buscarCEP(cep){
//     let options = {
//         method: "GET",
//         hearders: {"Content-type": "application/json"}
//     };
//     const promiseConsultaCEP = await fetch (`https://viacep.com.br/ws/${cep}/json/`, options);
//     const json = await promiseConsultaCEP.json();
//     console.log(json);
// }
 
// async function buscarCEPVersao2(cep){
//     let options = {
//         method: "GET",
//         hearders: {"Content-type": "application/json"}
//     };
//     const promiseConsultaCEP = await fetch (`https://viacep.com.br/ws/${cep}/json/`, options)
//     .then((resultado) => resultado.json())
//     .then((json) => console.log(json)); 
// }

/////////   Versão 2: para chamar diretamente do HTML /////////
//O valor do cep digitado está no <input> com id "txtCep"

function limpar(){
    inputCidade.value = '';
    inputUf.value = '';

}

async function buscarCEP(){
    limpar();
    //'document' é uma variável global que representa todo o HTML e seus elementos (a árvore DOM - Document Object Model)
    var txtCep = document.getElementById('inputCep');
    var cepInformado = inputCep.value;

    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then(resultado => resultado.json())
    .then(json => {
        if(json.erro){
            mostrarTelaErro();
        }else{
            preencherCamposComJSON(json);
        }
    })
    .catch(erro => {
        mostrarTelaErro();
    })
}

//Preencher os dados do endereço obtido na página HTML
function preencherCamposComJSON(json){
    if(json.localidade){ 
        inputCidade.value = json.localidade;
    }else{
        inputCidade.disabled = false;
    }
    if(json.uf){ 
        inputUf.value = json.uf;
    }else{
        inputUf.disabled = false;
    }
}

function mostrarTelaErro(){
    limpar();
    alert('CEP informado não existe');
}
