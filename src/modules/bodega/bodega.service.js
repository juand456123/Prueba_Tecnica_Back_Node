import * as repo from './bodega.repository.js';

export const createBodega = async (data) => {
  if (!data.nombreBodega || !data.codigo) {
    throw new Error('nombreBodega y codigo son obligatorios');
  }
  return repo.create(data);
};

export const getBodegas = () => repo.findAll();

export const getBodega = async (id) => {
  const b = await repo.findById(id);
  if (!b) throw new Error('Bodega no encontrada');
  return b;
};

export const updateBodega = async (id, data) => {
  await getBodega(id);
  return repo.update(id, data);
};

export const deleteBodega = async (id) => {
  await getBodega(id);
  return repo.remove(id);
};