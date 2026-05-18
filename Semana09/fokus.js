const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')));

let tempo = 1500;

app.get('/', (req, res) => {
    res.redirect('/static');
});

app.get("/set/time/:time", (req, res) => {
    tempo = req.params.time;
    res.send("Ok");
});

app.get('/time', (req, res) => {
   res.json({"time": tempo});
});

app.listen(port, () => {
    console.log(`Started server at ${port}`);
});
