const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());

const list_clients = ["Fabio", "Yasmin", "Anna", "Matheus"];

app.get("/cliente/:id", (req, res) => {
    let i = req.params.id;
    if (i >= list_clients.length || i < 0) {
        res.status(404);
        res.send("cliente não encontrado");
        return;
    }

    res.send(`${list_clients[i]}`);
});

app.post("/cliente", (req, res) => {
    // {id: id_do_cliente};
    let i = req.body.id;
    let response = "cliente não encontrado";
    if (i != undefined && i >= 0 && i < list_clients.length) {
        response = list_clients[i];
    }

    res.json({"cliente": response});
});

app.listen(port, () => {
    console.log(`Started server at ${port}`);
});
