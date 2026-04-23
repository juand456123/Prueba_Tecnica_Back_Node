import prisma from '../../config/prisma.js';

export const create = (data) =>
  prisma.producto.create({ data });

export const findAll = () =>
  prisma.producto.findMany();

export const findById = (id) =>
  prisma.producto.findUnique({ where: { id: Number(id) } });

export const update = (id, data) =>
  prisma.producto.update({
    where: { id: Number(id) },
    data
  });

export const remove = (id) =>
  prisma.producto.delete({
    where: { id: Number(id) }
  });