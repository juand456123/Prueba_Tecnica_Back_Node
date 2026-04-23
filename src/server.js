import app from './app.js';
import prisma from './config/prisma.js';

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

app.listen(4000, () => {
  console.log('Servidor corriendo en http://localhost:4000');
});