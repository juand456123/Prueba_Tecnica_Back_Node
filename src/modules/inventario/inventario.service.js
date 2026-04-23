import * as repo from './inventario.repository.js';
import prisma from '../../config/prisma.js';

export const createInventario = async ({ productoId, bodegaId }) => {
  if (!productoId || !bodegaId) {
    throw new Error('productoId y bodegaId son obligatorios');
  }

  // validar existencia de producto y bodega
  const [p, b] = await Promise.all([
    prisma.producto.findUnique({ where: { id: Number(productoId) } }),
    prisma.bodega.findUnique({ where: { id: Number(bodegaId) } }),
  ]);

  if (!p) throw new Error('Producto no existe');
  if (!b) throw new Error('Bodega no existe');

  // evitar duplicados
  const existente = await repo.findByProductoBodega(productoId, bodegaId);
  if (existente) throw new Error('Ya existe inventario para ese producto y bodega');

  return repo.create({
    productoId: Number(productoId),
    bodegaId: Number(bodegaId),
    cantidad: 0
  });
};

export const getInventarios = () => repo.findAll();

export const getInventario = async (id) => {
  const inv = await repo.findById(id);
  if (!inv) throw new Error('Inventario no encontrado');
  return inv;
};

export const deleteInventario = async (id) => {
  await getInventario(id);
  return repo.remove(id);
};