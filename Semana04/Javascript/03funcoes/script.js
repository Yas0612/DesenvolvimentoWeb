// A forma clássica (Lembra o C e o Python):
function somarAntigo(a, b) {
    return a + b;
}

// A forma Moderna (Arrow Function):
// Tiramos a palavra "function" e usamos a flecha "=>"
const somarModerno = (a, b) => {
    return a + b;
};


// Se a função tem só uma linha de código, você pode arrancar as chaves e o "return".
// Fica parecendo uma equação matemática!
const multiplicar = (a, b) => a * b;

console.log("Multiplicando com Arrow Function:", multiplicar(5, 4));

