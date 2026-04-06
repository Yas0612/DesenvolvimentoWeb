# Desafio 3: A "Pegadinha" da Referência (Imutabilidade no JS)

## O Cenário: 
O estagiário tentou dar permissão de admin para a usuária "Maria", mas acabou alterando o array original usuariosBanco, o que corrompeu o banco de dados original em memória.

## O Desafio: 
Use o .map() para criar um novo array usuariosAtualizados onde a Maria vira admin (admin: true), mas sem alterar o objeto da Maria no array original.

´´
const usuariosBanco = [
    { id: 1, nome: "Carlos", admin: false },
    { id: 2, nome: "Maria", admin: false }
];

// O código ruim do estagiário (Muda o array original!):
// usuariosBanco[1].admin = true;

´´