const http = require('http');

const content_json = { 'Content-Type': 'application/json' };
const content_text = { 'Content-Type': 'text/plain' };
const content_html = { 'Content-Type': 'text/html' };

const server = http.createServer((req, res) => {

  if (req.url == '/api/test' && req.method == 'GET')
  {
    res.writeHead(200, content_text);
    res.end('Hello, World!');
  }
});

server.listen(3000, () => {
  console.log('Server started on port 3000')
});
