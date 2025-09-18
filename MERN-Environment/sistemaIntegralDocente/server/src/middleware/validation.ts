import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { EstadoDocente } from '../types/docente.types';

// Schema para validar la creación de un docente
export const createDocenteSchema = Joi.object({
  nombre: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .required()
    .messages({
      'string.empty': 'El nombre es obligatorio',
      'string.min': 'El nombre debe tener al menos 2 caracteres',
      'string.max': 'El nombre no puede exceder 100 caracteres',
      'any.required': 'El nombre es obligatorio'
    }),
  
  apellido: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .required()
    .messages({
      'string.empty': 'El apellido es obligatorio',
      'string.min': 'El apellido debe tener al menos 2 caracteres',
      'string.max': 'El apellido no puede exceder 100 caracteres',
      'any.required': 'El apellido es obligatorio'
    }),
  
  telefono: Joi.string()
    .pattern(/^[\+]?[0-9\s\-\(\)]{8,20}$/)
    .required()
    .messages({
      'string.pattern.base': 'El teléfono debe tener un formato válido',
      'any.required': 'El teléfono es obligatorio'
    }),
  
  email: Joi.string()
    .email()
    .lowercase()
    .required()
    .messages({
      'string.email': 'El email debe tener un formato válido',
      'any.required': 'El email es obligatorio'
    }),
  
  numeroEmergencia: Joi.string()
    .pattern(/^[\+]?[0-9\s\-\(\)]{8,20}$/)
    .required()
    .messages({
      'string.pattern.base': 'El número de emergencia debe tener un formato válido',
      'any.required': 'El número de emergencia es obligatorio'
    }),
  
  numeroLegajo: Joi.string()
    .trim()
    .min(1)
    .max(20)
    .required()
    .messages({
      'string.empty': 'El número de legajo es obligatorio',
      'string.max': 'El número de legajo no puede exceder 20 caracteres',
      'any.required': 'El número de legajo es obligatorio'
    }),
  
  dni: Joi.string()
    .pattern(/^[0-9]{7,8}$/)
    .required()
    .messages({
      'string.pattern.base': 'El DNI debe tener entre 7 y 8 dígitos',
      'any.required': 'El DNI es obligatorio'
    }),
  
  materiaACargo: Joi.string()
    .trim()
    .min(2)
    .max(200)
    .required()
    .messages({
      'string.empty': 'La materia a cargo es obligatoria',
      'string.min': 'La materia a cargo debe tener al menos 2 caracteres',
      'string.max': 'La materia a cargo no puede exceder 200 caracteres',
      'any.required': 'La materia a cargo es obligatoria'
    })
});

// Schema para validar la actualización de un docente
export const updateDocenteSchema = Joi.object({
  nombre: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .messages({
      'string.min': 'El nombre debe tener al menos 2 caracteres',
      'string.max': 'El nombre no puede exceder 100 caracteres'
    }),
  
  apellido: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .messages({
      'string.min': 'El apellido debe tener al menos 2 caracteres',
      'string.max': 'El apellido no puede exceder 100 caracteres'
    }),
  
  telefono: Joi.string()
    .pattern(/^[\+]?[0-9\s\-\(\)]{8,20}$/)
    .messages({
      'string.pattern.base': 'El teléfono debe tener un formato válido'
    }),
  
  email: Joi.string()
    .email()
    .lowercase()
    .messages({
      'string.email': 'El email debe tener un formato válido'
    }),
  
  numeroEmergencia: Joi.string()
    .pattern(/^[\+]?[0-9\s\-\(\)]{8,20}$/)
    .messages({
      'string.pattern.base': 'El número de emergencia debe tener un formato válido'
    }),
  
  numeroLegajo: Joi.string()
    .trim()
    .min(1)
    .max(20)
    .messages({
      'string.max': 'El número de legajo no puede exceder 20 caracteres'
    }),
  
  dni: Joi.string()
    .pattern(/^[0-9]{7,8}$/)
    .messages({
      'string.pattern.base': 'El DNI debe tener entre 7 y 8 dígitos'
    }),
  
  materiaACargo: Joi.string()
    .trim()
    .min(2)
    .max(200)
    .messages({
      'string.min': 'La materia a cargo debe tener al menos 2 caracteres',
      'string.max': 'La materia a cargo no puede exceder 200 caracteres'
    }),
  
  estado: Joi.string()
    .valid(...Object.values(EstadoDocente))
    .messages({
      'any.only': 'El estado debe ser activo o inactivo'
    })
});

// Schema para validar parámetros de consulta
export const querySchema = Joi.object({
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(100).default(10),
  search: Joi.string().trim().allow(''),
  estado: Joi.string().valid(...Object.values(EstadoDocente)),
  sortBy: Joi.string().valid('nombre', 'apellido', 'email', 'numeroLegajo', 'fechaCreacion'),
  sortOrder: Joi.string().valid('asc', 'desc').default('asc')
});

// Middleware de validación
export const validate = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      const errors = error.details.map(detail => ({
        field: detail.path.join('.'),
        message: detail.message
      }));

      return res.status(400).json({
        success: false,
        message: 'Errores de validación',
        errors
      });
    }

    req.body = value;
    next();
  };
};

// Middleware de validación para query parameters
export const validateQuery = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.query, {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      const errors = error.details.map(detail => ({
        field: detail.path.join('.'),
        message: detail.message
      }));

      return res.status(400).json({
        success: false,
        message: 'Errores de validación en parámetros de consulta',
        errors
      });
    }

    req.query = value;
    next();
  };
};