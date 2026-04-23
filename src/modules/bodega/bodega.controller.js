import * as service from './bodega.service.js';

export const create = async (req, res, next) => {
  try {
    res.status(201).json(await service.createBodega(req.body));
  } catch (e) { next(e); }
};

export const findAll = async (req, res, next) => {
  try {
    res.json(await service.getBodegas());
  } catch (e) { next(e); }
};

export const findOne = async (req, res, next) => {
  try {
    res.json(await service.getBodega(req.params.id));
  } catch (e) { next(e); }
};

export const update = async (req, res, next) => {
  try {
    res.json(await service.updateBodega(req.params.id, req.body));
  } catch (e) { next(e); }
};

export const remove = async (req, res, next) => {
  try {
    res.json(await service.deleteBodega(req.params.id));
  } catch (e) { next(e); }
};