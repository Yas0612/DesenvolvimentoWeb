# Exercício 5: O Combo do Chefe (.filter() encadeado com .map())

## O Cenário: 
Essa é a vida real do Front-end moderno. Você tem uma lista de usuários do sistema, mas precisa extrair apenas os e-mails dos usuários que têm a tag de admin.

## O Desafio: 
Em uma única instrução (encadeando os métodos), primeiro filtre quem é admin, e depois mapeie o resultado para retornar apenas um array de strings com os e-mails.

´´
// --- CÓDIGO BASE ---
const usuarios = [
    { nome: "Ana", admin: true, email: "ana@visia.com" },
    { nome: "Bruno", admin: false, email: "bruno@visia.com" },
    { nome: "Carlos", admin: true, email: "carlos@visia.com" }
];

// O resultado esperado deve ser: ["ana@visia.com", "carlos@visia.com"]

´´