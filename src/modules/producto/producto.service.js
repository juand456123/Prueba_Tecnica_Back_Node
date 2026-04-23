import * as repo from './producto.repository.js';

export const createProducto = async (data) => {
  if (!data.nombreProducto || !data.ean) {
    throw new Error('nombreProducto y ean son obligatorios');
  }
  return repo.create(data);
};

export const getProductos = () => repo.findAll();

export const getProducto = async (id) => {
  const p = await repo.findById(id);
  if (!p) throw new Error('Producto no encontrado');
  return p;
};

export const updateProducto = async (id, data) => {
  await getProducto(id); // valida existencia
  return repo.update(id, data);
};

export const deleteProducto = async (id) => {
  await getProducto(id);
  return repo.remove(id);
};