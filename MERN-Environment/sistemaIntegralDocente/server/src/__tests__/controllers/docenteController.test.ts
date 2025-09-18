/// <reference types="jest" />
import './setup'; // Usar setup específico para controladores

import { Request, Response, NextFunction } from 'express';
import { 
  createDocente, 
  getDocentes, 
  getDocenteById, 
  updateDocente, 
  deleteDocente,
  toggleDocenteStatus,
  getDocenteStats
} from '../../controllers/docenteController';
import { EstadoDocente } from '../../types/docente.types';

// Mocks para el modelo Docente
const mockSave = jest.fn();
const mockFindOne = jest.fn();
const mockFind = jest.fn();
const mockFindById = jest.fn();
const mockFindByIdAndUpdate = jest.fn();
const mockFindByIdAndDelete = jest.fn();
const mockCountDocuments = jest.fn();
const mockAggregate = jest.fn();

jest.mock('../../models/Docente', () => {
  return jest.fn().mockImplementation(() => ({
    save: mockSave
  }));
});

// Mock de los métodos estáticos del modelo
const MockedDocente = require('../../models/Docente');
MockedDocente.findOne = mockFindOne;
MockedDocente.find = mockFind;
MockedDocente.findById = mockFindById;
MockedDocente.findByIdAndUpdate = mockFindByIdAndUpdate;
MockedDocente.findByIdAndDelete = mockFindByIdAndDelete;
MockedDocente.countDocuments = mockCountDocuments;
MockedDocente.aggregate = mockAggregate;

describe('DocenteController', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {
      body: {},
      params: {},
      query: {},
      files: undefined
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis()
    };
    next = jest.fn();

    // Limpiar todos los mocks
    jest.clearAllMocks();
    mockSave.mockClear();
    mockFindOne.mockClear();
    mockFind.mockClear();
    mockFindById.mockClear();
    mockFindByIdAndUpdate.mockClear();
    mockFindByIdAndDelete.mockClear();
    mockCountDocuments.mockClear();
    mockAggregate.mockClear();
  });

  describe('createDocente', () => {
    const docenteData = {
      nombre: 'Juan',
      apellido: 'Pérez',
      telefono: '+54 9 387 123-4567',
      email: 'juan.perez@universidad.edu.ar',
      numeroEmergencia: '+54 9 387 765-4321',
      numeroLegajo: 'DOC001',
      dni: '12345678',
      materiaACargo: 'Matemática I',
      estado: EstadoDocente.ACTIVO
    };

    it('debería crear un docente exitosamente', async () => {
      const docenteCreado = {
        _id: 'mock-id',
        ...docenteData,
        fechaCreacion: new Date(),
        fechaActualizacion: new Date()
      };

      req.body = docenteData;
      
      // Mock de findOne para verificar unicidad
      mockFindOne.mockResolvedValue(null);
      mockSave.mockResolvedValue(docenteCreado);

      await createDocente(req as any, res as Response, next);

      expect(mockFindOne).toHaveBeenCalled();
      expect(MockedDocente).toHaveBeenCalledWith(docenteData);
      expect(mockSave).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Docente creado exitosamente',
        data: docenteCreado
      });
    });

    it('debería detectar email duplicado', async () => {
      req.body = docenteData;

      const existingDocente = {
        _id: 'existing-id',
        email: docenteData.email,
        numeroLegajo: 'OTHER001',
        dni: '87654321'
      };

      mockFindOne.mockResolvedValue(existingDocente);

      await createDocente(req as any, res as Response, next);

      expect(next).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'El email ya está registrado',
          statusCode: 400
        })
      );
    });
  });

  describe('getDocentes', () => {
    it('debería obtener todos los docentes con paginación', async () => {
      const mockDocentes = [
        { _id: '1', nombre: 'Juan', apellido: 'Pérez', estado: EstadoDocente.ACTIVO },
        { _id: '2', nombre: 'María', apellido: 'González', estado: EstadoDocente.ACTIVO }
      ];

      const mockQuery = {
        skip: jest.fn().mockReturnThis(),
        limit: jest.fn().mockReturnThis(),
        sort: jest.fn().mockReturnThis(),
        exec: jest.fn().mockResolvedValue(mockDocentes)
      };

      mockFind.mockReturnValue(mockQuery);
      mockCountDocuments.mockResolvedValue(2);

      req.query = { page: '1', limit: '10' };

      await getDocentes(req as Request, res as Response, next);

      expect(mockFind).toHaveBeenCalled();
      expect(mockQuery.skip).toHaveBeenCalledWith(0);
      expect(mockQuery.limit).toHaveBeenCalledWith(10);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: mockDocentes,
        pagination: {
          page: 1,
          limit: 10,
          total: 2,
          pages: 1,
          hasNext: false,
          hasPrev: false
        }
      });
    });

    it('debería filtrar docentes por búsqueda', async () => {
      const mockDocentes = [
        { _id: '1', nombre: 'Juan', apellido: 'Pérez', estado: EstadoDocente.ACTIVO }
      ];

      const mockQuery = {
        skip: jest.fn().mockReturnThis(),
        limit: jest.fn().mockReturnThis(),
        sort: jest.fn().mockReturnThis(),
        exec: jest.fn().mockResolvedValue(mockDocentes)
      };

      mockFind.mockReturnValue(mockQuery);
      mockCountDocuments.mockResolvedValue(1);

      req.query = { search: 'Juan', page: '1', limit: '10' };

      await getDocentes(req as Request, res as Response, next);

      expect(mockFind).toHaveBeenCalledWith({
        $or: [
          { nombre: { $regex: 'Juan', $options: 'i' } },
          { apellido: { $regex: 'Juan', $options: 'i' } },
          { email: { $regex: 'Juan', $options: 'i' } },
          { dni: { $regex: 'Juan', $options: 'i' } },
          { numeroLegajo: { $regex: 'Juan', $options: 'i' } },
          { materiaACargo: { $regex: 'Juan', $options: 'i' } }
        ]
      });
    });
  });

  describe('getDocenteById', () => {
    it('debería obtener un docente por ID', async () => {
      const mockDocente = {
        _id: 'mock-id',
        nombre: 'Juan',
        apellido: 'Pérez',
        estado: EstadoDocente.ACTIVO
      };

      mockFindById.mockResolvedValue(mockDocente);

      req.params = { id: 'mock-id' };

      await getDocenteById(req as Request, res as Response, next);

      expect(mockFindById).toHaveBeenCalledWith('mock-id');
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: mockDocente
      });
    });

    it('debería manejar docente no encontrado', async () => {
      mockFindById.mockResolvedValue(null);

      req.params = { id: 'non-existent-id' };

      await getDocenteById(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'Docente no encontrado',
          statusCode: 404
        })
      );
    });
  });

  describe('updateDocente', () => {
    it('debería actualizar un docente exitosamente', async () => {
      const updateData = { nombre: 'Juan Carlos' };
      const docenteActualizado = {
        _id: 'mock-id',
        nombre: 'Juan Carlos',
        apellido: 'Pérez',
        estado: EstadoDocente.ACTIVO
      };

      mockFindByIdAndUpdate.mockResolvedValue(docenteActualizado);

      req.params = { id: 'mock-id' };
      req.body = updateData;

      await updateDocente(req as any, res as Response, next);

      expect(mockFindByIdAndUpdate).toHaveBeenCalledWith(
        'mock-id',
        updateData,
        { new: true, runValidators: true }
      );
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Docente actualizado exitosamente',
        data: docenteActualizado
      });
    });
  });

  describe('deleteDocente', () => {
    it('debería eliminar un docente exitosamente', async () => {
      const docenteEliminado = {
        _id: 'mock-id',
        nombre: 'Juan',
        apellido: 'Pérez'
      };

      mockFindByIdAndDelete.mockResolvedValue(docenteEliminado);

      req.params = { id: 'mock-id' };

      await deleteDocente(req as Request, res as Response, next);

      expect(mockFindByIdAndDelete).toHaveBeenCalledWith('mock-id');
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Docente eliminado exitosamente'
      });
    });

    it('debería manejar docente no encontrado para eliminar', async () => {
      mockFindByIdAndDelete.mockResolvedValue(null);

      req.params = { id: 'non-existent-id' };

      await deleteDocente(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'Docente no encontrado',
          statusCode: 404
        })
      );
    });
  });

  describe('toggleDocenteStatus', () => {
    it('debería cambiar el estado de activo a inactivo', async () => {
      const docenteOriginal = {
        _id: 'mock-id',
        nombre: 'Juan',
        estado: EstadoDocente.ACTIVO,
        save: jest.fn()
      };

      const docenteActualizado = {
        ...docenteOriginal,
        estado: EstadoDocente.INACTIVO
      };

      mockFindById.mockResolvedValue(docenteOriginal);
      docenteOriginal.save.mockResolvedValue(docenteActualizado);

      req.params = { id: 'mock-id' };

      await toggleDocenteStatus(req as Request, res as Response, next);

      expect(docenteOriginal.estado).toBe(EstadoDocente.INACTIVO);
      expect(docenteOriginal.save).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe('getDocenteStats', () => {
    it('debería obtener estadísticas de docentes', async () => {
      const mockStats = [
        { _id: EstadoDocente.ACTIVO, count: 10 },
        { _id: EstadoDocente.INACTIVO, count: 3 }
      ];

      mockAggregate.mockResolvedValue(mockStats);

      await getDocenteStats(req as Request, res as Response, next);

      expect(mockAggregate).toHaveBeenCalledWith([
        {
          $group: {
            _id: '$estado',
            count: { $sum: 1 }
          }
        }
      ]);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: {
          total: 13,
          activos: 10,
          inactivos: 3,
          porEstado: mockStats
        }
      });
    });

    it('debería manejar estadísticas vacías', async () => {
      mockAggregate.mockResolvedValue([]);

      await getDocenteStats(req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: {
          total: 0,
          activos: 0,
          inactivos: 0,
          porEstado: []
        }
      });
    });
  });
});