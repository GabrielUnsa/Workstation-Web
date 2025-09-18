import { Request, Response, NextFunction } from 'express';

// Interface para errores personalizados
export interface AppError extends Error {
  statusCode?: number;
  status?: string;
  isOperational?: boolean;
}

// Clase para errores de aplicación
export class ApplicationError extends Error implements AppError {
  statusCode: number;
  status: string;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

// Manejo de errores de MongoDB
const handleCastErrorDB = (err: any): ApplicationError => {
  const message = `Recurso no encontrado. ID inválido: ${err.value}`;
  return new ApplicationError(message, 400);
};

const handleDuplicateFieldsDB = (err: any): ApplicationError => {
  const duplicatedFields = Object.keys(err.keyValue).join(', ');
  const message = `Los siguientes campos ya existen: ${duplicatedFields}`;
  return new ApplicationError(message, 400);
};

const handleValidationErrorDB = (err: any): ApplicationError => {
  const errors = Object.values(err.errors).map((el: any) => el.message);
  const message = `Datos inválidos: ${errors.join('. ')}`;
  return new ApplicationError(message, 400);
};

// Enviar error en desarrollo
const sendErrorDev = (err: AppError, res: Response): void => {
  res.status(err.statusCode || 500).json({
    success: false,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

// Enviar error en producción
const sendErrorProd = (err: AppError, res: Response): void => {
  // Errores operacionales: enviar mensaje al cliente
  if (err.isOperational) {
    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message
    });
  } else {
    // Errores de programación: no mostrar detalles al cliente
    console.error('ERROR 💥', err);

    res.status(500).json({
      success: false,
      message: 'Algo salió mal en el servidor'
    });
  }
};

// Middleware principal de manejo de errores
export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else {
    let error = { ...err };
    error.message = err.message;

    // Manejo específico de errores de MongoDB
    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === 'ValidationError') error = handleValidationErrorDB(error);

    sendErrorProd(error, res);
  }
};

// Middleware para manejar rutas no encontradas
export const notFound = (req: Request, res: Response, next: NextFunction): void => {
  const err = new ApplicationError(`No se encontró la ruta ${req.originalUrl}`, 404);
  next(err);
};

// Wrapper para funciones async
export const catchAsync = (fn: Function) => {
  return function(this: any, req: Request, res: Response, next: NextFunction) {
    return fn.call(this, req, res, next).catch(next);
  };
};