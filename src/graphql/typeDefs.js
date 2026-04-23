import { gql } from 'apollo-server-express';

export default gql`

  enum TipoMovimiento {
    ENTRADA
    SALIDA
  }

  type Producto {
    id: ID!
    nombreProducto: String!
    ean: String!
  }

  type Bodega {
    id: ID!
    nombreBodega: String!
    codigo: String!
  }

  type Inventario {
    id: ID!
    cantidad: Int!
    producto: Producto!
    bodega: Bodega!
  }

  type Movimiento {
    id: ID!
    cantidad: Int!
    tipo: TipoMovimiento!
    fecha: String!
    inventario: Inventario!
  }

  type Query {
    productos: [Producto]
    producto(id: ID!): Producto

    bodegas: [Bodega]
    inventarios: [Inventario]
    movimientos: [Movimiento]
  }

  type Mutation {
    # Producto
    crearProducto(nombreProducto: String!, ean: String!): Producto
    actualizarProducto(id: ID!, nombreProducto: String, ean: String): Producto
    eliminarProducto(id: ID!): Boolean

    # Bodega
    crearBodega(nombreBodega: String!, codigo: String!): Bodega

    # Inventario
    crearInventario(productoId: ID!, bodegaId: ID!): Inventario

    # Movimiento
    crearMovimiento(
      inventarioId: ID!
      cantidad: Int!
      tipo: TipoMovimiento!
    ): Movimiento
  }
`;