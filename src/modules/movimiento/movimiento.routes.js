import { Router } from 'express';
import * as controller from './movimiento.controller.js';

const router = Router();

 /**
  * @swagger
  * tags:
  *   name: Movimientos
  *   description: Gestión de movimientos de inventario (entradas, salidas y ajustes)
  */

/**
 * @swagger
 * /api/movimientos:
 *   post:
 *     summary: Crear un movimiento de inventario
 *     tags: [Movimientos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               inventarioId:
 *                 type: integer
 *                 description: ID del inventario asociado
 *                 example: 1
 *               cantidad:
 *                 type: integer
 *                 description: Cantidad del movimiento
 *                 example: 5
 *               tipo:
 *                 type: string
 *                 enum: [ENTRADA, SALIDA, AJUSTE]
 *                 description: Tipo de movimiento
 *                 example: ENTRADA
 *               fecha:
 *                 type: string
 *                 format: date-time
 *                 description: Fecha del movimiento (opcional, si no se envía se genera automáticamente)
 *     responses:
 *       201:
 *         description: Movimiento creado exitosamente
 */
router.post('/', controller.create);

/**
 * @swagger
 * /api/movimientos:
 *   get:
 *     summary: Obtener todos los movimientos
 *     tags: [Movimientos]
 *     responses:
 *       200:
 *         description: Lista de movimientos
 */
router.get('/', controller.findAll);

export default router;