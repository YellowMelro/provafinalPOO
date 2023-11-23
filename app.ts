import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes';
import leilaoRoutes from './routes/leilaoRoutes';
import lanceRoutes from './routes/lanceRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Adicione prefixos para suas rotas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/leiloes', leilaoRoutes);
app.use('/api/lances', lanceRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
