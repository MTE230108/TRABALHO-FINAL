const express = require('express');
const app = express();
const cors = require('cors')

// Configuração do Sequelize
const db = require('./config/database');

// Testar a conexão com o banco de dados
db.authenticate()
  .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
  .catch(err => console.error('Erro ao conectar com o banco de dados:', err));

// Middlewares
app.use(express.json());
app.use(cors())

// Importar rotas
const clientesRoutes = require('./rotas/clientesderotas');
const jogosRoutes = require('./rotas/jogosderotas');
const aluguelRoutes = require('./rotas/aluguelderotas');
const comidasRoutes = require('./rotas/comidasderotas');

// Usar rotas
app.use(clientesRoutes);
app.use(jogosRoutes);
app.use(aluguelRoutes);
app.use(comidasRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
``