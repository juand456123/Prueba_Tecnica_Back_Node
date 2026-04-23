import * as service from './producto.service.js';

export const create = async (req, res, next) => {
  try {
    const data = await service.createProducto(req.body);
    res.status(201).json(data);
  } catch (e) { next(e); }
};

export const findAll = async (req, res, next) => {
  try {
    res.json(await service.getProductos());
  } catch (e) { next(e); }
};

export const findOne = async (req, res, next) => {
  try {
    res.json(await service.getProducto(req.params.id));
  } catch (e) { next(e); }
};

export const update = async (req, res, next) => {
  try {
    res.json(await service.updateProducto(req.params.id, req.body));
  } catch (e) { next(e); }
};

export const remove = async (req, res, next) => {
  try {
    res.json(await service.deleteProducto(req.params.id));
  } catch (e) { next(e); }
};