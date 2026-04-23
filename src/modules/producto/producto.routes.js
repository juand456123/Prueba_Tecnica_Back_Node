import { Router } from 'express';
import * as controller from './producto.controller.js';

const router = Router();

 /**
  * @swagger
  * tags:
  *   name: Productos
  *   description: Gestión de productos del sistema
  */

/**
 * @swagger
 * /api/productos:
 *   post:
 *     summary: Crear un producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombreProducto:
 *                 type: string
 *                 description: Nombre del producto
 *                 example: Arroz 1kg
 *               ean:
 *                 type: string
 *                 description: Código EAN único del producto
 *                 example: "7701234567890"
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 description: Fecha de creación (opcional, se genera automáticamente)
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 */
router.post('/', controller.create);

/**
 * @swagger
 * /api/productos:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Lista de productos
 */
router.get('/', controller.findAll);

/**
 * @swagger
 * /api/productos/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto encontrado
 *       404:
 *         description: Producto no encontrado
 */
router.get('/:id', controller.findOne);

/**
 * @swagger
 * /api/productos/{id}:
 *   put:
 *     summary: Actualizar un producto
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombreProducto:
 *                 type: string
 *               ean:
 *                 type: string
 *     responses:
 *       200:
 *         description: Producto actualizado
 */
router.put('/:id', controller.update);

/**
 * @swagger
 * /api/productos/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Producto eliminado
 */
router.delete('/:id', controller.remove);

export default router;
