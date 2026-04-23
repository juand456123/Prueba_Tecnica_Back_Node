import prisma from '../config/prisma.js';

import * as productoService from '../modules/producto/producto.service.js';
import * as bodegaService from '../modules/bodega/bodega.service.js';
import * as inventarioService from '../modules/inventario/inventario.service.js';
import * as movimientoService from '../modules/movimiento/movimiento.service.js';
import * as movimientoRepo from '../modules/movimiento/movimiento.repository.js';

export default {

  Query: {
    productos: () => productoService.getProductos(),
    producto: (_, { id }) => productoService.getProducto(id),

    bodegas: () => bodegaService.getBodegas(),

    inventarios: () => inventarioService.getInventarios(),

    movimientos: () => movimientoRepo.findAll(),
  },

  Mutation: {

    //PRODUCTO
    crearProducto: (_, args) =>
      productoService.createProducto(args),

    actualizarProducto: (_, { id, ...data }) =>
      productoService.updateProducto(id, data),

    eliminarProducto: async (_, { id }) => {
      await productoService.deleteProducto(id);
      return true;
    },

    //BODEGA
    crearBodega: (_, args) =>
      bodegaService.createBodega(args),

    //INVENTARIO
    crearInventario: (_, args) =>
      inventarioService.createInventario(args),

    //MOVIMIENTO
    crearMovimiento: (_, args) =>
      movimientoService.crearMovimiento(args),
  },

  
  Inventario: {
    producto: (parent) =>
      prisma.producto.findUnique({
        where: { id: parent.productoId }
      }),

    bodega: (parent) =>
      prisma.bodega.findUnique({
        where: { id: parent.bodegaId }
      }),
  },

  Movimiento: {
    inventario: (parent) =>
      prisma.inventario.findUnique({
        where: { id: parent.inventarioId }
      }),
  }
};