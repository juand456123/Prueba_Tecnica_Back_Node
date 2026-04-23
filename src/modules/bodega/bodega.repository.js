import prisma from '../../config/prisma.js';

export const create = (data) =>
  prisma.bodega.create({ data });

export const findAll = () =>
  prisma.bodega.findMany();

export const findById = (id) =>
  prisma.bodega.findUnique({ where: { id: Number(id) } });

export const update = (id, data) =>
  prisma.bodega.update({
    where: { id: Number(id) },
    data
  });

export const remove = (id) =>
  prisma.bodega.delete({
    where: { id: Number(id) }
  });