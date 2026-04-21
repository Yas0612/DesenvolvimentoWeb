const inputTitulo = document.querySelector("#titulo");
const inputConteudo = document.querySelector("#conteudo");
const btnEnviar = document.querySelector("#btn-enviar");
const feedback = document.querySelector("#mensagem");

// url: "https://jsonplaceholder.typicode.com/posts";

// body = {
//  title: inputTitulo.value,
//  body: inputConteudo.value,
//  userId: 1 
// }


btnEnviar.addEventListener("click", () => enviarDados());

const enviarDados = async () => {


    if(inputTitulo.value.length === "" | inputConteudo.value.length === "") {
        alert("Campos inválidos!");
        return;
    }

    try {
        
        const body = {
            title: inputTitulo.value,
            body: inputConteudo.value,
            userId: 1
        }

        const url = "https://jsonplaceholder.typicode.com/posts"

        const resposta = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        });

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: Status ${resposta.status}`); 
        }

        const data = await resposta.json()

        console.log(data);

        feedback.textContent = "Post enviado com sucesso!"
        
    } catch (error) {
        console.error(error);
        feedback.textContent = "Erro ao enviar o post"
    }
}



