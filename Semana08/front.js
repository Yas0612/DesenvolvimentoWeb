const http = require('http');

const content_text = { 'Content-Type': 'text/plain' };
const content_html = { 'Content-Type': 'text/html' };

const server = http.createServer((req, res) => {
  if (req.method == 'GET' && req.url == '/') {
    res.writeHead(200, content_html);
    res.write('<h1>Padaria da Ana</h1>');
    res.end();
  }
});

server.listen(6969, () => {
  console.log("Server listening at port 6969");
});
