const inputCep = document.querySelector("#input-cep");
const btnBuscar = document.querySelector("#btn-buscar");
const resultado = document.querySelector("#resultado");

// viacep.com.br/ws/01001000/json/

btnBuscar.addEventListener("click", () => buscarCep());

const buscarCep = async () => {
    try {
        const cep = inputCep.value;
    
        if(cep.length !== 8) {
            resultado.innerHTML = "<strong>CEP deve conter 8 dígitos.</strong>";
            return;
        };
    
        const url = `https://viacep.com.br/ws/${cep}/json/`;
    
        const response = await fetch(url);
    
        const data = await response.json();
    
        console.log(data)
    
        if(data.erro) {
            throw new Error(404);
        } 
    
        exibirResultado(data);
        
    } catch (error) {
        
        if(error.message === "404") {
            resultado.innerHTML = "<strong>CEP não encontrado.</strong>";
        } else {
            resultado.innerHTML = "<strong>Ocorreu um erro ao buscar o CEP.</strong>";
        }
    }

}


const exibirResultado = (data) => {

    resultado.innerHTML = `
        <p><strong>CEP:</strong> ${data.cep}</p>
        <p><strong>Bairro:</strong> ${data.bairro}</p>
        <p><strong>Cidade:</strong> ${data.localidade}</p>
        <p><strong>UF:</strong> ${data.uf}</p>
    `;
}
