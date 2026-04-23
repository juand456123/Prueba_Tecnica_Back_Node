import * as service from './movimiento.service.js';
import * as repo from './movimiento.repository.js';

export const create = async (req, res, next) => {
  try {
    res.status(201).json(await service.crearMovimiento(req.body));
  } catch (e) { next(e); }
};

export const findAll = async (req, res, next) => {
  try {
    res.json(await repo.findAll());
  } catch (e) { next(e); }
};