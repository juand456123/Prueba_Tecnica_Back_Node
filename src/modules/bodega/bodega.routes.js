import { Router } from 'express';
import * as controller from './bodega.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Bodegas
 *   description: Gestión de bodegas de almacenamiento
 */

/**
 * @swagger
 * /api/bodegas:
 *   post:
 *     summary: Crear una bodega
 *     tags: [Bodegas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombreBodega:
 *                 type: string
 *                 description: Nombre de la bodega
 *               codigo:
 *                 type: string
 *                 description: Código de la bodega
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 description: Fecha de creación (timestamp)
 *     responses:
 *       201:
 *         description: Bodega creada correctamente
 */
router.post('/', controller.create);

/**
 * @swagger
 * /api/bodegas:
 *   get:
 *     summary: Obtener todas las bodegas
 *     tags: [Bodegas]
 *     responses:
 *       200:
 *         description: Lista de bodegas
 */
router.get('/', controller.findAll);

/**
 * @swagger
 * /api/bodegas/{id}:
 *   get:
 *     summary: Obtener una bodega por ID
 *     tags: [Bodegas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID de la bodega
 *     responses:
 *       200:
 *         description: Bodega encontrada
 *       404:
 *         description: Bodega no encontrada
 */
router.get('/:id', controller.findOne);

/**
 * @swagger
 * /api/bodegas/{id}:
 *   put:
 *     summary: Actualizar una bodega
 *     tags: [Bodegas]
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
 *               nombreBodega:
 *                 type: string
 *               codigo:
 *                 type: string
 *     responses:
 *       200:
 *         description: Bodega actualizada correctamente
 */
router.put('/:id', controller.update);

/**
 * @swagger
 * /api/bodegas/{id}:
 *   delete:
 *     summary: Eliminar una bodega
 *     tags: [Bodegas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Bodega eliminada correctamente
 */
router.delete('/:id', controller.remove);

export default router;