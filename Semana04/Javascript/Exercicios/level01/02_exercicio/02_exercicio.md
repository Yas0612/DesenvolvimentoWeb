# Exercício 2: O Relatório (Arrow Function e Template Literals)

## O Cenário: 
Precisamos gerar uma string de log formatada sempre que um sensor de temperatura registrar uma leitura.

## O Desafio: 
Transforme a função clássica abaixo em uma Arrow Function de uma única linha (retorno implícito). 
Depois, substitua a concatenação com + pelo uso das crases (Template Literals).

´´
// --- CÓDIGO BASE (Padrão antigo) ---
function formatarLeitura(sensor, temperatura) {
    return "O sensor " + sensor + " registrou " + temperatura + " graus.";
}

console.log(formatarLeitura("Alpha", 25));

´´