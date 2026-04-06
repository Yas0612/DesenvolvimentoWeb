# Exercicio 01: A Falha de Segurança (=== e const)

## O Cenário: 

O sistema de catraca do laboratório recebe o ID do crachá do banco de dados como 
texto (String), mas a catraca física lê como número (Number). 
O estagiário anterior usou var e ==, o que abriu uma brecha de segurança.

## O Desafio: 
Reescreva o código abolindo o var, usando const ou let corretamente, e conserte 
a validação de segurança usando o operador de igualdade estrita (===).

´´
// --- CÓDIGO BASE (Com problemas) ---
var crachaRecebido = "1042";
var idAutorizado = 1042;

// Se o usuário passar, a porta abre (mas não deveria abrir se os tipos forem diferentes!)
if (crachaRecebido == idAutorizado) {
    var status = "Acesso Liberado";
    console.log(status);
}

´´