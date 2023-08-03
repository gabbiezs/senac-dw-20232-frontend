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

async function buscarCEP(){
    limpar();
    var txtCep = document.getElementById('txtCep');
    var cepInformado = txtCep.value;

    const promiseConsultaCEP = await fetch(`https://viacep.com.br/ws/${cepInformado}/json/`);

    const json = await promiseConsultaCEP.json();
    //preencher os dados
    //esse if funciona em javascrip, é o equivalente a:
    //if(json.bairro != undefined && json.bairro != '')
    if(json.erro){
        pintarCamposDeVermelho();
    }else{
        preencherCamposComJSON();
    }
    if(json.bairro){
        txtBairro.value = json.bairro;
    } else {
        txtBairro.disabled = false;
    }
    document.getElementById('txtUF').value = json.uf;
    document.getElementById('txtCidade').value = json.localidade;
    // console.log(json);
}
//
function limpar(){
    txtBairro.value = '';
    txtCidade.value = '';
    txtUF.value = '';

    txtBairro.disabled = true;
    txtCidade.disabled = true;
    txtUF.disabled = true;

}