# Desafio 2: A Auditoria de Acessos (Lógica com Tipagem)

## O Cenário: 
Você recebeu um log de acessos à sala dos servidores. O sistema antigo misturava os tipos de dados da horaAcesso (alguns vieram como número, outros como string). Você precisa identificar quem tentou acessar a sala depois das 18h.

## O Desafio: 
A comparação deve usar a igualdade e desigualdade estrita (=== ou !==), e você precisa forçar a conversão segura (coerção explícita) para garantir que strings como "19" sejam lidas como o número 19 antes de filtrar.

´´
const logsAcesso = [
    { usuario: "Igor", horaAcesso: 14, admin: true },
    { usuario: "Yuri", horaAcesso: "19", admin: false },
    { usuario: "João", horaAcesso: 17, admin: false },
    { usuario: "Ana", horaAcesso: "21", admin: true }
];

// Objetivo final: Retornar um array APENAS com os nomes de quem acessou após as 18h.
// Resultado esperado: ["Yuri", "Ana"]

´´