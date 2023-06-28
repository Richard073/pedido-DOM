// Coloque aqui o código para o servidor (Node.js)

// Importar módulos necessários
const http = require('http');

// Criar um servidor HTTP básico
const servidor = http.createServer(function(req, res) {
  // Roteamento de URL básico
  if (req.url === '/api/restaurante/menu') {
    const menu = {
      pratoPrincipal: 'Espaguete à Bolonhesa',
      sobremesa: 'Tiramisu',
      bebida: 'Vinho Tinto',
    };

    // Definir cabeçalhos da resposta
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);

    // Enviar resposta JSON
    res.end(JSON.stringify(menu));
  } else {
    // Rota de fallback para URLs desconhecidas
    res.writeHead(404);
    res.end('404 - Página não encontrada');
  }
});

// Iniciar o servidor na porta 3000
servidor.listen(3000, function() {
  console.log('Servidor iniciado na porta 3000');
});
