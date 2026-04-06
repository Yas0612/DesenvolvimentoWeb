# Exercício 2: Limpeza de Sensores (.filter())

## O Cenário: 
Você recebeu um array contendo os dados de todos os sensores da bancada. Alguns estão com defeito (status false).

## O Desafio: 
Sem usar a estrutura for tradicional, crie um novo array chamado sensoresAtivos contendo apenas os objetos cujo status seja true.

´´
// --- CÓDIGO BASE ---
const sensores = [
    { id: 1, nome: "Termômetro A", ativo: true },
    { id: 2, nome: "Barômetro B", ativo: false },
    { id: 3, nome: "Higrômetro C", ativo: false },
    { id: 4, nome: "Termômetro D", ativo: true }
];

// Sua missão: Criar o array sensoresAtivos usando .filter()

´´