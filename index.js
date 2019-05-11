const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const data = {
  "actions": [{
      id: 1,
      description: "exibir"
    },
    {
      id: 2,
      description: "salvar"
    },
    {
      id: 3,
      description: "deletar"
    }
  ],
  "menu": [{
      id: 1,
      description: "Painel de Gestão"
    },
    {
      id: 2,
      description: "Conta Digital"
    },
    {
      id: 3,
      description: "Ant. de Recebíveis"
    }
  ]
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
  });
  res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});