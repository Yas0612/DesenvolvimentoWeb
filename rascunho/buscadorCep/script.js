const inputCep = document.querySelector("#input-cep");
const btnBuscar = document.querySelector("#btn-buscar");
const resultado = document.querySelector("#resultado");

// viacep.com.br/ws/01001000/json/

btnBuscar.addEventListener("click", () => buscarCep());

const buscarCep = async () => {

    const cep = inputCep.value;
    
    if(cep.length !== 8) {
        resultado.innerHTML = "<strong>CEP deve conter 8 dígitos.</strong>";
        return;
    };
    
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const response = await fetch(url);

    const data = await response.json(); 

    resultado.innerHTML =     `
        <h3>${data.logradouro}</h3>
        <p><strong>Bairro:</strong> ${data.bairro}</p>
        <p><strong>Cidade/UF:</strong> ${data.localidade} - ${data.uf}</p>
        <p><strong>DDD:</strong> ${data.ddd}</p>
    `

}
