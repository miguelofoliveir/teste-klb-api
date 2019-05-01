const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const data = {
    "actions": [
        "exibir",
        "salvar",
        "deletar"
    ],
    "menu": [
        "Painel de Gestão",
        "Conta Digital",
        "Ant. de Recebíveis"
    ]

}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

