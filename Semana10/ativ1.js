const express = require('express');

let teachers = [
    {
        id: 0,
        name: "Fábio Gostoso",
        classes: ["Visão Computacional", "Desenvolvimento Web"]
    },
    {
        id: 1,
        name: "Anna Vitoria",
        classes: ["Python", "Desenho"]
    }
];

const app = express();
app.use(express.json());

// TODO: Pegar o nome de todos os professores.
app.get("/nomes", (req, res) => {
    let names = [];

    for (let i = 0; i < teachers.length; i++) {
        names.push(teachers[i].name);
    }

    res.json({"names": names});
});

// TODO: Pegar todas as classes.
app.get("/materias", (req, res) => {
    let materias = [];

    for (let i = 0; i < teachers.length; i++) {
        let classes = teachers[i].classes;

        for (let c = 0; c < classes.length; c++) {
            materias.push(classes[c]);
        }
    }

    res.json({"materias": materias});
});

// TODO: Pegar o ID de um professor pelo nome.
app.get("/get-id", (req, res) => {
    let name = req.body.name;
    let id = null;

    for (let i = 0; i < teachers.length; i++) {
        if (teachers[i].name === name) {
            id = teachers[i].id;
        }
    }

    res.json({"id": id});
});

app.listen(3000, () => {
    console.log("Listening at 3000");
});

// TODO: Pegar quais as classes dadas por um ID.
// TODO: Pegar quais as classes dadas por um nome, por professor.
// TODO: Adicionar novos professores via JSON com POST.
// TODO: Deletar um professor por ID.
// TODO: Modificar informações de um professor por ID. Passar {name, classes}.
// TODO: Conectar o front-end com o backend.
