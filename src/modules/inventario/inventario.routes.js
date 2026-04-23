import { Router } from 'express';
import * as controller from './inventario.controller.js';

const router = Router();

/**
  * @swagger
  * tags:
  *   name: Inventarios
  *   description: Gestión de inventario de productos por bodega
  */

/**
 * @swagger
 * /api/inventarios:
 *   post:
 *     summary: Crear un registro de inventario
 *     tags: [Inventarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productoId:
 *                 type: integer
 *                 description: ID del producto
 *                 example: 1
 *               bodegaId:
 *                 type: integer
 *                 description: ID de la bodega
 *                 example: 2
 *               cantidad:
 *                 type: integer
 *                 description: Cantidad disponible
 *                 example: 10
 *     responses:
 *       201:
 *         description: Inventario creado correctamente
 */
router.post('/', controller.create);

/**
 * @swagger
 * /api/inventarios:
 *   get:
 *     summary: Obtener todos los inventarios
 *     tags: [Inventarios]
 *     responses:
 *       200:
 *         description: Lista de inventarios
 */
router.get('/', controller.findAll);

/**
 * @swagger
 * /api/inventarios/{id}:
 *   get:
 *     summary: Obtener un inventario por ID
 *     tags: [Inventarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del inventario
 *     responses:
 *       200:
 *         description: Inventario encontrado
 *       404:
 *         description: Inventario no encontrado
 */
router.get('/:id', controller.findOne);

/**
 * @swagger
 * /api/inventarios/{id}:
 *   delete:
 *     summary: Eliminar un inventario
 *     tags: [Inventarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del inventario
 *     responses:
 *       200:
 *         description: Inventario eliminado correctamente
 */
router.delete('/:id', controller.remove);

export default router;