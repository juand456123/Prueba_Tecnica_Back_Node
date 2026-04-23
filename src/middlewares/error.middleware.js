export const errorHandler = (err, req, res, next) => {

  console.error('Error:', err);

  let statusCode = err.statusCode || 500;
  let message = err.message || 'Error interno del servidor';

  
  if (err.code === 'P2002') {
    statusCode = 400;
    message = 'Registro duplicado (campo único)';
  }

  if (err.code === 'P2025') {
    statusCode = 404;
    message = 'Registro no encontrado';
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};