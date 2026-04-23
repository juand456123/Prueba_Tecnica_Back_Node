import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Inventario',
      version: '1.0.0',
      description: 'Documentación API prueba técnica',
    },
    servers: [
      {
        url: 'http://localhost:4000',
      },
    ],
  },
  apis: ['./src/modules/**/*.js'], 
};

export const swaggerSpec = swaggerJSDoc(options);