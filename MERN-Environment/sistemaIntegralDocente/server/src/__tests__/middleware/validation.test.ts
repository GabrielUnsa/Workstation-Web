import '../controllers/setup'; // Usar setup específico para unit tests

import { Request, Response, NextFunction } from 'express';
import {
  createDocenteSchema,
  updateDocenteSchema,
  querySchema,
  validate,
  validateQuery
} from '../../middleware/validation';

describe('Validation Middleware', () => {
  const validDocenteData = {
    nombre: 'Juan Carlos',
    apellido: 'Pérez',
    telefono: '+54 387 456-7890',
    email: 'juan.perez@example.com',
    numeroEmergencia: '+54 387 123-4567',
    numeroLegajo: 'DOC001',
    dni: '12345678',
    materiaACargo: 'Matemática Avanzada'
  };

  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {
      body: {},
      query: {}
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    next = jest.fn();
  });

  describe('createDocenteSchema', () => {
    it('debería validar datos correctos exitosamente', () => {
      const { error } = createDocenteSchema.validate(validDocenteData);
      expect(error).toBeUndefined();
    });

    it('debería rechazar nombre vacío', () => {
      const invalidData = { ...validDocenteData, nombre: '' };
      const { error } = createDocenteSchema.validate(invalidData);
      
      expect(error).toBeDefined();
      expect(error?.details[0].message).toBe('El nombre es obligatorio');
    });

    it('debería rechazar nombre muy corto', () => {
      const invalidData = { ...validDocenteData, nombre: 'A' };
      const { error } = createDocenteSchema.validate(invalidData);
      
      expect(error).toBeDefined();
      expect(error?.details[0].message).toBe('El nombre debe tener al menos 2 caracteres');
    });

    it('debería rechazar nombre muy largo', () => {
      const invalidData = { ...validDocenteData, nombre: 'A'.repeat(101) };
      const { error } = createDocenteSchema.validate(invalidData);
      
      expect(error).toBeDefined();
      expect(error?.details[0].message).toBe('El nombre no puede exceder 100 caracteres');
    });

    it('debería rechazar email con formato inválido', () => {
      const invalidData = { ...validDocenteData, email: 'email-invalido' };
      const { error } = createDocenteSchema.validate(invalidData);
      
      expect(error).toBeDefined();
      expect(error?.details[0].message).toBe('El email debe tener un formato válido');
    });

    it('debería rechazar teléfono con formato inválido', () => {
      const invalidData = { ...validDocenteData, telefono: '123' };
      const { error } = createDocenteSchema.validate(invalidData);
      
      expect(error).toBeDefined();
      expect(error?.details[0].message).toBe('El teléfono debe tener un formato válido');
    });

    it('debería rechazar DNI con formato inválido', () => {
      const invalidData = { ...validDocenteData, dni: '123' };
      const { error } = createDocenteSchema.validate(invalidData);
      
      expect(error).toBeDefined();
      expect(error?.details[0].message).toBe('El DNI debe tener entre 7 y 8 dígitos');
    });

    it('debería rechazar número de legajo vacío', () => {
      const invalidData = { ...validDocenteData, numeroLegajo: '' };
      const { error } = createDocenteSchema.validate(invalidData);
      
      expect(error).toBeDefined();
      expect(error?.details[0].message).toBe('El número de legajo es obligatorio');
    });

    it('debería rechazar estado si se incluye en create (no está permitido)', () => {
      const invalidData = { ...validDocenteData, estado: 'activo' };
      const { error } = createDocenteSchema.validate(invalidData);
      
      expect(error).toBeDefined();
      expect(error?.details[0].message).toBe('"estado" is not allowed');
    });

    it('debería trimear espacios en nombre y apellido', () => {
      const dataWithSpaces = {
        ...validDocenteData,
        nombre: '  Juan Carlos  ',
        apellido: '  Pérez  '
      };
      const { error, value } = createDocenteSchema.validate(dataWithSpaces);
      
      expect(error).toBeUndefined();
      expect(value.nombre).toBe('Juan Carlos');
      expect(value.apellido).toBe('Pérez');
    });

    it('debería convertir email a minúsculas', () => {
      const dataWithUpperCaseEmail = {
        ...validDocenteData,
        email: 'JUAN.PEREZ@EXAMPLE.COM'
      };
      const { error, value } = createDocenteSchema.validate(dataWithUpperCaseEmail);
      
      expect(error).toBeUndefined();
      expect(value.email).toBe('juan.perez@example.com');
    });
  });

  describe('updateDocenteSchema', () => {
    it('debería permitir actualizaciones parciales', () => {
      const partialUpdate = { nombre: 'Juan', email: 'nuevo@example.com' };
      const { error } = updateDocenteSchema.validate(partialUpdate);
      
      expect(error).toBeUndefined();
    });

    it('debería rechazar datos inválidos en actualización', () => {
      const invalidUpdate = { email: 'email-invalido' };
      const { error } = updateDocenteSchema.validate(invalidUpdate);
      
      expect(error).toBeDefined();
      expect(error?.details[0].message).toBe('El email debe tener un formato válido');
    });

    it('debería permitir actualización vacía', () => {
      const { error } = updateDocenteSchema.validate({});
      expect(error).toBeUndefined();
    });

    it('debería rechazar estado inválido', () => {
      const invalidData = { estado: 'pendiente' };
      const { error } = updateDocenteSchema.validate(invalidData);
      
      expect(error).toBeDefined();
      expect(error?.details[0].message).toBe('El estado debe ser activo o inactivo');
    });
  });

  describe('validate middleware', () => {
    it('debería pasar al siguiente middleware con datos válidos', () => {
      req.body = validDocenteData;
      const middleware = validate(createDocenteSchema);
      
      middleware(req as Request, res as Response, next);
      
      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });

    it('debería devolver error 400 con datos inválidos', () => {
      req.body = { nombre: '' };
      const middleware = validate(createDocenteSchema);
      
      middleware(req as Request, res as Response, next);
      
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Errores de validación',
        errors: expect.arrayContaining([
          expect.objectContaining({
            field: 'nombre',
            message: 'El nombre es obligatorio'
          })
        ])
      });
      expect(next).not.toHaveBeenCalled();
    });

    it('debería formatear múltiples errores de validación', () => {
      req.body = { nombre: '', email: 'invalid-email' };
      const middleware = validate(createDocenteSchema);
      
      middleware(req as Request, res as Response, next);
      
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Errores de validación',
        errors: expect.arrayContaining([
          expect.objectContaining({
            field: 'nombre',
            message: 'El nombre es obligatorio'
          }),
          expect.objectContaining({
            field: 'email',
            message: 'El email debe tener un formato válido'
          })
        ])
      });
    });
  });

  describe('validateQuery middleware', () => {
    it('debería validar parámetros de consulta válidos', () => {
      req.query = { page: '1', limit: '10', search: 'test' };
      const middleware = validateQuery(querySchema);
      
      middleware(req as Request, res as Response, next);
      
      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });

    it('debería rechazar parámetros de consulta inválidos', () => {
      req.query = { page: '0', limit: '200' };
      const middleware = validateQuery(querySchema);
      
      middleware(req as Request, res as Response, next);
      
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Errores de validación en parámetros de consulta',
        errors: expect.arrayContaining([
          expect.objectContaining({
            field: 'page'
          }),
          expect.objectContaining({
            field: 'limit'
          })
        ])
      });
      expect(next).not.toHaveBeenCalled();
    });

    it('debería usar valores por defecto para parámetros opcionales', () => {
      req.query = {};
      const middleware = validateQuery(querySchema);
      
      middleware(req as Request, res as Response, next);
      
      expect(next).toHaveBeenCalled();
      expect((req.query as any).page).toBe(1);
      expect((req.query as any).limit).toBe(10);
      expect((req.query as any).sortOrder).toBe('asc');
    });
  });
});