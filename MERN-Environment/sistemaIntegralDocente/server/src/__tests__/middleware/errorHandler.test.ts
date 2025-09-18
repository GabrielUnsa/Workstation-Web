import '../controllers/setup'; // Usar setup específico para unit tests

import { Request, Response, NextFunction } from 'express';
import {
  ApplicationError,
  globalErrorHandler,
  notFound,
  catchAsync
} from '../../middleware/errorHandler';

describe('ErrorHandler Middleware', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };
    next = jest.fn();

    jest.clearAllMocks();
    // Mock environment variable
    process.env.NODE_ENV = 'test';
  });

  describe('ApplicationError class', () => {
    it('debería crear un error con código de estado 400', () => {
      const error = new ApplicationError('Test error', 400);

      expect(error.message).toBe('Test error');
      expect(error.statusCode).toBe(400);
      expect(error.status).toBe('fail');
      expect(error.isOperational).toBe(true);
      expect(error).toBeInstanceOf(Error);
    });

    it('debería crear un error con código de estado 500', () => {
      const error = new ApplicationError('Server error', 500);

      expect(error.message).toBe('Server error');
      expect(error.statusCode).toBe(500);
      expect(error.status).toBe('error');
      expect(error.isOperational).toBe(true);
    });

    it('debería capturar el stack trace', () => {
      const error = new ApplicationError('Test error', 400);
      expect(error.stack).toBeDefined();
      expect(error.stack).toContain('Test error');
    });
  });

  describe('globalErrorHandler middleware', () => {
    it('debería manejar ApplicationError correctamente', () => {
      const error = new ApplicationError('Custom error message', 404);
      
      globalErrorHandler(error, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Custom error message'
      });
    });

    it('debería manejar errores de MongoDB - CastError', () => {
      const mongoError = {
        name: 'CastError',
        kind: 'ObjectId',
        value: 'invalid-id',
        path: '_id'
      };
      
      globalErrorHandler(mongoError as any, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: expect.stringContaining('ID inválido')
      });
    });

    it('debería manejar errores de MongoDB - Duplicate key', () => {
      const duplicateError = {
        name: 'MongoServerError',
        code: 11000,
        keyValue: { email: 'test@test.com', numeroLegajo: 'DOC001' }
      };
      
      globalErrorHandler(duplicateError as any, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: expect.stringContaining('ya existen')
      });
    });

    it('debería manejar errores de validación de MongoDB', () => {
      const validationError = {
        name: 'ValidationError',
        errors: {
          nombre: { message: 'El nombre es requerido' },
          email: { message: 'Email inválido' }
        }
      };
      
      globalErrorHandler(validationError as any, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: expect.stringContaining('Datos inválidos')
      });
    });

    it('debería manejar errores genéricos', () => {
      const genericError = new Error('Generic error message');
      
      globalErrorHandler(genericError, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Algo salió mal en el servidor'
      });
    });

    it('debería incluir stack trace en desarrollo', () => {
      process.env.NODE_ENV = 'development';
      const error = new ApplicationError('Test error', 400);
      
      globalErrorHandler(error, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          stack: expect.any(String)
        })
      );
    });

    it('debería ocultar stack trace en producción', () => {
      process.env.NODE_ENV = 'production';
      const error = new ApplicationError('Test error', 400);
      
      globalErrorHandler(error, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Test error'
      });
    });
  });

  describe('notFound middleware', () => {
    it('debería crear un error 404 para rutas no encontradas', () => {
      req.originalUrl = '/api/ruta-inexistente';
      
      notFound(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'No se encontró la ruta /api/ruta-inexistente',
          statusCode: 404
        })
      );
    });
  });

  describe('catchAsync wrapper', () => {
    it('debería ejecutar función async exitosamente', async () => {
      const asyncFn = jest.fn().mockResolvedValue('success');
      const wrappedFn = catchAsync(asyncFn);

      await wrappedFn(req as Request, res as Response, next);

      expect(asyncFn).toHaveBeenCalledWith(req, res, next);
      expect(next).not.toHaveBeenCalled();
    });

    it('debería capturar errores y pasarlos a next', async () => {
      const error = new Error('Async error');
      const asyncFn = jest.fn().mockRejectedValue(error);
      const wrappedFn = catchAsync(asyncFn);

      await wrappedFn(req as Request, res as Response, next);

      expect(asyncFn).toHaveBeenCalledWith(req, res, next);
      expect(next).toHaveBeenCalledWith(error);
    });

    it('debería funcionar con controladores que devuelven promesas', async () => {
      const controllerFn = async (req: Request, res: Response) => {
        res.status(200).json({ success: true });
      };
      
      const wrappedController = catchAsync(controllerFn);
      await wrappedController(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ success: true });
      expect(next).not.toHaveBeenCalled();
    });

    it('debería preservar el contexto this', async () => {
      const context = {
        value: 'test',
        asyncMethod: async function(req: Request, res: Response) {
          return this.value;
        }
      };
      
      const wrappedMethod = catchAsync(context.asyncMethod);
      const result = await wrappedMethod.call(context, req as Request, res as Response, next);

      expect(result).toBe('test');
    });
  });

  describe('Error scenarios integration', () => {
    it('debería manejar múltiples errores en secuencia', () => {
      const errors = [
        new ApplicationError('First error', 400),
        new ApplicationError('Second error', 404),
        new Error('Third error')
      ];

      errors.forEach((error, index) => {
        // Reset mocks for each iteration
        jest.clearAllMocks();
        
        globalErrorHandler(error, req as Request, res as Response, next);
        
        if (error instanceof ApplicationError) {
          expect(res.status).toHaveBeenCalledWith(error.statusCode);
        } else {
          expect(res.status).toHaveBeenCalledWith(500);
        }
      });
    });

    it('debería manejar errores sin mensaje', () => {
      const errorWithoutMessage = new Error();
      
      globalErrorHandler(errorWithoutMessage, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Algo salió mal en el servidor'
      });
    });
  });
});