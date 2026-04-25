// metodo: POST
// url: "https://jsonplaceholder.typicode.com/posts";

// body = {
//  title: string,
//  body: string
//  userId: number
// }

const titulo = document.querySelector("#titulo");
const conteudo = document.querySelector("#conteudo");
const btnEnviar = document.querySelector("#btn-enviar");
const feedback = document.querySelector("#mensagem");

btnEnviar.addEventListener("click", () => enviarDados());

const enviarDados = async () => {


    if(titulo.value == "" || conteudo.value == "") {
        alert("Preencha todos os campos!");
        return;
    }

    const body = {
        title: titulo.value,
        body: conteudo.value,
        userId: 1
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method:"POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(body)      
        });

        const data = await response.json();

        if(!response.ok) {
            throw new Error();
            return;
        }

        console.log(data);
        feedback.innerText = "Dados enviados com sucesso!";
        
    } catch (error) {
        feedback.innerText = "Ocorreu um erro ao enviar os dados.";
    }
}







