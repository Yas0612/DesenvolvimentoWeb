const http = require('http');

const content_text = { 'Content-Type': 'text/plain' };

const server = http.createServer((req, res) => {
  if (req.url == "/api/test") {
    res.writeHead(200, content_text);
    if (req.method == "GET") {
      res.write('Hello, World! - GET!');
    } else if (req.method == "POST") {
      res.write('Hello, World! - POST');
    }
    res.end();
  }
});

server.listen(6969, () => {
  console.log("Server listening at port 3000");
});
