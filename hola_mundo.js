const http = require('http');

const servidor = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola mundo desde Node.js!\n');
});

servidor.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000/');
});
