// Em Python, somar número com string dá ERRO na hora. 
// O JavaScript tenta "adivinhar" o que você quer fazer:

console.log("1 + '1' = ", 1 + "1"); // Vira '11' (Ele converte o número para string e junta)
console.log("'2' - 1 = ", "2" - 1); // Vira 1 (Ele converte a string para número e subtrai)
console.log("'2' * '3' = ", "2" * "3"); // Vira 6 (Multiplica normal)


// O == ignora o tipo da variável e foca só no valor convertido. 
// É expressamente PROIBIDO usar isso no mercado de trabalho hoje em dia!
console.log(" ");
console.log("-------------------------------------------------")
console.log(" ");

console.log("0 == '0' :", 0 == '0');   // true (Bizarro, um é int, outro é string)
console.log("0 == []  :", 0 == []);    // true (Bizarro, zero é igual a um array vazio??)
console.log("'' == false :", '' == false); // true (String vazia é considerada falsa)

console.log(" ");
console.log("-------------------------------------------------")
console.log(" ");

// O === (Igualdade Estrita) é o que vocês conheciam do C/C++ e Python. 
// Ele compara O VALOR e O TIPO na memória. É a nossa Regra de Ouro.
console.log("0 === '0' :", 0 === '0'); // FALSE (Ufa! Um é int, o outro é string)
// console.log("0 === []:", 0 === []);  // FALSE (Como tem que ser)

