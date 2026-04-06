# Desafio 1: O Dashboard do Visia (Filtro + Transformação + Texto)

## O Cenário: 
O laboratório tem um array de objetos que registra a leitura dos sensores de temperatura. Alguns sensores falharam e registraram a temperatura como "ERRO". 
Seu objetivo é limpar esses dados, converter as temperaturas válidas de Celsius para Fahrenheit (C * 1.8) + 32, e gerar um array de frases para o painel de exibição.

## O Desafio: 
Tudo deve ser feito encadeando métodos (.filter().map()). Proibido usar for ou if/else clássicos.

´´
// --- CÓDIGO BASE ---
const leituras = [
    { id: "S-01", tempCelsius: 25 },
    { id: "S-02", tempCelsius: "ERRO" },
    { id: "S-03", tempCelsius: 30 },
    { id: "S-04", tempCelsius: "ERRO" },
    { id: "S-05", tempCelsius: 22 }
];

// Objetivo final: 
// ["Sensor S-01: 77.0°F", "Sensor S-03: 86.0°F", "Sensor S-05: 71.6°F"]

´´