import prisma from '../../config/prisma.js';

export const findAll = () =>
  prisma.movimiento.findMany({
    include: { inventario: true },
    orderBy: { fecha: 'desc' }
  });