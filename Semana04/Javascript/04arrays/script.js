
const frontendTeam = ["Yuri", "João", "Igor"];

// for(let i = 0; i < frontendTeam.length; i++) { ... }

// Em JS, nós usamos o .forEach() apenas para percorrer e fazer uma ação:
console.log("Listando a equipe:");
frontendTeam.forEach(membro => {
    console.log(`- ${membro}`); // Usando Template Literals (as crases)

    // Usando concatenação tradicional (menos recomendado):
    // console.log("- " + membro);
});


frontendTeam.forEach((membro, indice, ArrayCompleto) => {
    console.log(`Membro ${indice + 1} de [${ArrayCompleto}]: ${membro}`);
});



// O .map() percorre o array, aplica uma transformação em cada item e 
// DEVOLVE UM ARRAY NOVO do mesmo tamanho. Ele não altera o original!
// map é um transformador, ele pega o valor do item, transforma e devolve o novo valor para o array novo.

const notasBrutas = [5.0, 7.5, 9.0];

// Vamos dar 1 ponto de bônus para todo mundo
const notasComBonus = notasBrutas.map((nota) => nota + 1);

console.log("Notas originais:", notasBrutas);
console.log("Notas com bônus:", notasComBonus);


// O .filter() percorre o array e devolve um array novo APENAS com os 
// itens que passarem no teste lógico (retornarem true).
// filter é apenas um testador, ele não altera o valor dos itens, só decide se eles ficam ou não.

const aprovados = notasComBonus.filter(nota => nota >= 7.0);

console.log("Apenas quem passou:", aprovados);