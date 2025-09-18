import { Document } from 'mongoose';
import { Request } from 'express';

// Enum para el estado del docente
export enum EstadoDocente {
  ACTIVO = 'activo',
  INACTIVO = 'inactivo'
}

// Interface base para el docente
export interface IDocente {
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  numeroEmergencia: string;
  numeroLegajo: string;
  dni: string;
  horario?: string; // Path al archivo PDF
  resolucionTomaPosicion?: string; // Path al archivo PDF
  resolucionDesignacion?: string; // Path al archivo PDF
  materiaACargo: string;
  estado: EstadoDocente;
  fechaCreacion: Date;
  fechaActualizacion: Date;
}

// Interface para el documento de Mongoose
export interface IDocenteDocument extends IDocente, Document {}

// Interface para crear un nuevo docente (sin campos auto-generados)
export interface ICreateDocente {
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  numeroEmergencia: string;
  numeroLegajo: string;
  dni: string;
  materiaACargo: string;
  horario?: Express.Multer.File;
  resolucionTomaPosicion?: Express.Multer.File;
  resolucionDesignacion?: Express.Multer.File;
}

// Interface para actualizar un docente
export interface IUpdateDocente {
  nombre?: string;
  apellido?: string;
  telefono?: string;
  email?: string;
  numeroEmergencia?: string;
  numeroLegajo?: string;
  dni?: string;
  materiaACargo?: string;
  horario?: Express.Multer.File;
  resolucionTomaPosicion?: Express.Multer.File;
  resolucionDesignacion?: Express.Multer.File;
}

// Interface para las respuestas de la API
export interface IApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

// Interface para los parámetros de consulta
export interface IQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  estado?: EstadoDocente;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// Interface para los filtros de búsqueda
export interface IDocenteFilters {
  nombre?: RegExp;
  apellido?: RegExp;
  email?: RegExp;
  numeroLegajo?: RegExp;
  dni?: RegExp;
  materiaACargo?: RegExp;
  estado?: EstadoDocente;
  $or?: Array<{
    nombre?: RegExp;
    apellido?: RegExp;
    email?: RegExp;
    numeroLegajo?: RegExp;
    dni?: RegExp;
    materiaACargo?: RegExp;
  }>;
}

// Interface para la respuesta paginada
export interface IPaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Tipos para Express Request con archivos
export interface MulterRequest extends Request {
  files?: {
    horario?: Express.Multer.File[];
    resolucionTomaPosicion?: Express.Multer.File[];
    resolucionDesignacion?: Express.Multer.File[];
  };
}