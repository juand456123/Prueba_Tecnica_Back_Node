import prisma from '../../config/prisma.js';

export const crearMovimiento = async ({ inventarioId, cantidad, tipo }) => {
  if (!inventarioId || !cantidad || !tipo) {
    throw new Error('inventarioId, cantidad y tipo son obligatorios');
  }
  if (!['ENTRADA', 'SALIDA'].includes(tipo)) {
    throw new Error('tipo debe ser ENTRADA o SALIDA');
  }

  return prisma.$transaction(async (tx) => {
    const inv = await tx.inventario.findUnique({
      where: { id: Number(inventarioId) }
    });

    if (!inv) throw new Error('Inventario no existe');

    let nuevaCantidad = inv.cantidad;

    if (tipo === 'ENTRADA') {
      nuevaCantidad += Number(cantidad);
    } else {
      if (inv.cantidad < cantidad) {
        throw new Error('Stock insuficiente');
      }
      nuevaCantidad -= Number(cantidad);
    }

    await tx.inventario.update({
      where: { id: inv.id },
      data: { cantidad: nuevaCantidad }
    });

    return tx.movimiento.create({
      data: {
        inventarioId: inv.id,
        cantidad: Number(cantidad),
        tipo
      }
    });
  });
};