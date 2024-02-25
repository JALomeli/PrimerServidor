const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req, res) => {
  fs.readFile('archivo.txt', (err, data) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data);
  });
});

servidor.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000/');
});
