const pesquisarCEP = document.getElementById("bPesquisar");
pesquisarCEP.addEventListener("click", event =>{
  event.PreventDefault();
});

const inputDoCep = document.querySelector("#cep");
const valorDoCep = inputDoCep.value;
const url = `https://viacep.com.br/ws/${valorDoCep}/json/`;

fetch(url).then(response =>{
return response.json();
    })
.then(data =>{
      atribuirCampos(data);
})
.then(data =>
{
if(data.erro)
{
alert("O CEP DIGITADO ESTÁ INVÁLIDO");
return ;
}
atribuirCampos(data);
})

function atribuirCampos(data)
{
const logradouro = document.querySelector("#logradouro");
const complemento = document.querySelector("#complemento");
const bairro = document.querySelector("#bairro");
const localidade = document.querySelector("#localidade");
const uf = document.querySelector("#uf");

logradouro.value = data.logradouro;
complemento.value = data.complemento;
bairro.value = data.bairro;
localidade.value = data.localidade;
uf.value = data.uf;
};