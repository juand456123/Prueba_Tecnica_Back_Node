import prisma from '../../config/prisma.js';

export const create = (data) =>
  prisma.inventario.create({ data });

export const findAll = () =>
  prisma.inventario.findMany({
    include: { producto: true, bodega: true }
  });

export const findById = (id) =>
  prisma.inventario.findUnique({
    where: { id: Number(id) },
    include: { producto: true, bodega: true }
  });

export const findByProductoBodega = (productoId, bodegaId) =>
  prisma.inventario.findFirst({
    where: { productoId: Number(productoId), bodegaId: Number(bodegaId) }
  });

export const update = (id, data) =>
  prisma.inventario.update({
    where: { id: Number(id) },
    data
  });

export const remove = (id) =>
  prisma.inventario.delete({
    where: { id: Number(id) }
  });