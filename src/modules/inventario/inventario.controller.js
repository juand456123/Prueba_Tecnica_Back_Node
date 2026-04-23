import * as service from './inventario.service.js';

export const create = async (req, res, next) => {
  try {
    res.status(201).json(await service.createInventario(req.body));
  } catch (e) { next(e); }
};

export const findAll = async (req, res, next) => {
  try {
    res.json(await service.getInventarios());
  } catch (e) { next(e); }
};

export const findOne = async (req, res, next) => {
  try {
    res.json(await service.getInventario(req.params.id));
  } catch (e) { next(e); }
};

export const remove = async (req, res, next) => {
  try {
    res.json(await service.deleteInventario(req.params.id));
  } catch (e) { next(e); }
};