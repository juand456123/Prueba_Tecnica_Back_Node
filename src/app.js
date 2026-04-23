import express from 'express';
import cors from 'cors';

import productoRoutes from './modules/producto/producto.routes.js';
import bodegaRoutes from './modules/bodega/bodega.routes.js';
import inventarioRoutes from './modules/inventario/inventario.routes.js';
import movimientoRoutes from './modules/movimiento/movimiento.routes.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger.js';
import { errorHandler } from './middlewares/error.middleware.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/productos', productoRoutes);
app.use('/api/bodegas', bodegaRoutes);
app.use('/api/inventarios', inventarioRoutes);
app.use('/api/movimientos', movimientoRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(errorHandler);



export default app;