const inputCep = document.querySelector("#input-cep");
const btnBuscar = document.querySelector("#btn-buscar");
const painel = document.querySelector("#resultado");

// método: GET
// url: viacep.com.br/ws/${cep}/json/

btnBuscar.addEventListener("click", () => BuscarCep());


const BuscarCep = async () => {

    try {
        const cep = inputCep.value;
    
        const url = `http://viacep.com.br/ws/${cep}/json/`;
    
        const resposta = await fetch(url);
        const dados = await resposta.json();

        console.log(dados)
    
        painel.innerHTML = `
            <h3>${dados.logradouro}</h3>
            <p><strong>Bairro:</strong> ${dados.bairro}</p>
            <p><strong>Cidade/UF:</strong> ${dados.localidade} - ${dados.uf}</p>
            <p><strong>DDD:</strong> ${dados.ddd}</p>
        `;
        
    } catch (error) {
        console.log(error);
         painel.innerHTML = `
            <strong>Houve um erro na requisição do cep fornecido.</strong>
        `;
    }
}

