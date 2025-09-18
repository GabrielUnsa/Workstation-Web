import '../setup'; // Usar setup con MongoDB Memory Server

import request from 'supertest';
import { Express } from 'express';
import mongoose from 'mongoose';
import createApp from '../app';
import Docente from '../../models/Docente';
import { EstadoDocente } from '../../types/docente.types';

describe('Docente Integration Tests', () => {
  let testApp: Express;

  // Datos de prueba
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

  const secondDocenteData = {
    nombre: 'María Elena',
    apellido: 'González',
    telefono: '+54 387 987-6543',
    email: 'maria.gonzalez@example.com',
    numeroEmergencia: '+54 387 456-7890',
    numeroLegajo: 'DOC002',
    dni: '87654321',
    materiaACargo: 'Historia Argentina'
  };

  beforeAll(async () => {
    testApp = createApp();
  }, 30000);

  beforeEach(async () => {
    // Limpiar la colección antes de cada test
    await Docente.deleteMany({});
  });

  describe('POST /api/docentes', () => {
    it('debería crear un nuevo docente exitosamente', async () => {
      const response = await request(testApp)
        .post('/api/docentes')
        .send(validDocenteData)
        .expect(201);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('message', 'Docente creado exitosamente');
      expect(response.body.data).toHaveProperty('_id');
      expect(response.body.data.nombre).toBe(validDocenteData.nombre);
      expect(response.body.data.email).toBe(validDocenteData.email);
      expect(response.body.data.estado).toBe(EstadoDocente.ACTIVO);

      // Verificar que se guardó en la base de datos
      const savedDocente = await Docente.findById(response.body.data._id);
      expect(savedDocente).toBeTruthy();
      expect(savedDocente?.nombre).toBe(validDocenteData.nombre);
    });

    it('debería rechazar datos inválidos', async () => {
      const invalidData = { ...validDocenteData, email: 'email-invalido' };

      const response = await request(testApp)
        .post('/api/docentes')
        .send(invalidData)
        .expect(400);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body).toHaveProperty('message', 'Errores de validación');
      expect(response.body.errors).toBeInstanceOf(Array);
      expect(response.body.errors[0]).toHaveProperty('field', 'email');
    });

    it('debería rechazar emails duplicados', async () => {
      // Crear primer docente
      await request(testApp)
        .post('/api/docentes')
        .send(validDocenteData)
        .expect(201);

      // Intentar crear segundo docente con el mismo email
      const duplicateData = { ...secondDocenteData, email: validDocenteData.email };

      const response = await request(testApp)
        .post('/api/docentes')
        .send(duplicateData)
        .expect(400);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('ya existen');
    });

    it('debería rechazar DNI duplicado', async () => {
      // Crear primer docente
      await request(testApp)
        .post('/api/docentes')
        .send(validDocenteData)
        .expect(201);

      // Intentar crear segundo docente con el mismo DNI
      const duplicateData = { ...secondDocenteData, dni: validDocenteData.dni };

      const response = await request(testApp)
        .post('/api/docentes')
        .send(duplicateData)
        .expect(400);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('ya existen');
    });

    it('debería rechazar número de legajo duplicado', async () => {
      // Crear primer docente
      await request(testApp)
        .post('/api/docentes')
        .send(validDocenteData)
        .expect(201);

      // Intentar crear segundo docente con el mismo número de legajo
      const duplicateData = { ...secondDocenteData, numeroLegajo: validDocenteData.numeroLegajo };

      const response = await request(testApp)
        .post('/api/docentes')
        .send(duplicateData)
        .expect(400);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('ya existen');
    });
  });

  describe('GET /api/docentes', () => {
    beforeEach(async () => {
      // Crear algunos docentes de prueba
      await Docente.create([validDocenteData, secondDocenteData]);
    });

    it('debería obtener todos los docentes con paginación', async () => {
      const response = await request(testApp)
        .get('/api/docentes')
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body.data).toBeInstanceOf(Array);
      expect(response.body.data).toHaveLength(2);
      expect(response.body).toHaveProperty('pagination');
      expect(response.body.pagination.currentPage).toBe(1);
      expect(response.body.pagination.totalItems).toBe(2);
    });

    it('debería permitir paginación personalizada', async () => {
      const response = await request(testApp)
        .get('/api/docentes')
        .query({ page: 1, limit: 1 })
        .expect(200);

      expect(response.body.data).toHaveLength(1);
      expect(response.body.pagination.currentPage).toBe(1);
      expect(response.body.pagination.limit).toBe(1);
      expect(response.body.pagination.totalPages).toBe(2);
    });

    it('debería permitir búsqueda por texto', async () => {
      const response = await request(testApp)
        .get('/api/docentes')
        .query({ search: 'Juan' })
        .expect(200);

      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0].nombre).toBe('Juan Carlos');
    });

    it('debería permitir filtrado por estado', async () => {
      // Cambiar estado de un docente
      const docente = await Docente.findOne({ nombre: 'Juan Carlos' });
      if (docente) {
        docente.estado = EstadoDocente.INACTIVO;
        await docente.save();
      }

      const response = await request(testApp)
        .get('/api/docentes')
        .query({ estado: EstadoDocente.ACTIVO })
        .expect(200);

      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0].estado).toBe(EstadoDocente.ACTIVO);
    });

    it('debería permitir ordenamiento', async () => {
      const response = await request(testApp)
        .get('/api/docentes')
        .query({ sortBy: 'nombre', sortOrder: 'desc' })
        .expect(200);

      expect(response.body.data[0].nombre).toBe('María Elena');
      expect(response.body.data[1].nombre).toBe('Juan Carlos');
    });

    it('debería validar parámetros de consulta inválidos', async () => {
      const response = await request(testApp)
        .get('/api/docentes')
        .query({ page: 0, limit: 200 })
        .expect(400);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body).toHaveProperty('message', 'Errores de validación en parámetros de consulta');
    });
  });

  describe('GET /api/docentes/:id', () => {
    let docenteId: string;

    beforeEach(async () => {
      const docente = await Docente.create(validDocenteData);
      docenteId = docente._id.toString();
    });

    it('debería obtener un docente por ID', async () => {
      const response = await request(testApp)
        .get(`/api/docentes/${docenteId}`)
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body.data._id).toBe(docenteId);
      expect(response.body.data.nombre).toBe(validDocenteData.nombre);
    });

    it('debería devolver 404 para ID inexistente', async () => {
      const fakeId = new mongoose.Types.ObjectId().toString();

      const response = await request(testApp)
        .get(`/api/docentes/${fakeId}`)
        .expect(404);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('no encontrado');
    });

    it('debería devolver 400 para ID inválido', async () => {
      const response = await request(testApp)
        .get('/api/docentes/invalid-id')
        .expect(400);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('ID inválido');
    });
  });

  describe('PUT /api/docentes/:id', () => {
    let docenteId: string;

    beforeEach(async () => {
      const docente = await Docente.create(validDocenteData);
      docenteId = docente._id.toString();
    });

    it('debería actualizar un docente exitosamente', async () => {
      const updateData = { nombre: 'Juan Pablo', telefono: '+54 387 999-8888' };

      const response = await request(testApp)
        .put(`/api/docentes/${docenteId}`)
        .send(updateData)
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body.data.nombre).toBe(updateData.nombre);
      expect(response.body.data.telefono).toBe(updateData.telefono);
      expect(response.body.data.apellido).toBe(validDocenteData.apellido); // No cambió

      // Verificar en la base de datos
      const updatedDocente = await Docente.findById(docenteId);
      expect(updatedDocente?.nombre).toBe(updateData.nombre);
    });

    it('debería rechazar datos inválidos en la actualización', async () => {
      const invalidUpdate = { email: 'email-invalido' };

      const response = await request(testApp)
        .put(`/api/docentes/${docenteId}`)
        .send(invalidUpdate)
        .expect(400);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body).toHaveProperty('message', 'Errores de validación');
    });

    it('debería devolver 404 para ID inexistente', async () => {
      const fakeId = new mongoose.Types.ObjectId().toString();

      const response = await request(testApp)
        .put(`/api/docentes/${fakeId}`)
        .send({ nombre: 'Nuevo Nombre' })
        .expect(404);

      expect(response.body).toHaveProperty('success', false);
    });
  });

  describe('PATCH /api/docentes/:id/toggle-status', () => {
    let docenteId: string;

    beforeEach(async () => {
      const docente = await Docente.create(validDocenteData);
      docenteId = docente._id.toString();
    });

    it('debería cambiar el estado de activo a inactivo', async () => {
      const response = await request(testApp)
        .patch(`/api/docentes/${docenteId}/toggle-status`)
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body.data.estado).toBe(EstadoDocente.INACTIVO);

      // Verificar en la base de datos
      const updatedDocente = await Docente.findById(docenteId);
      expect(updatedDocente?.estado).toBe(EstadoDocente.INACTIVO);
    });

    it('debería cambiar el estado de inactivo a activo', async () => {
      // Primero cambiar a inactivo
      await Docente.findByIdAndUpdate(docenteId, { estado: EstadoDocente.INACTIVO });

      const response = await request(testApp)
        .patch(`/api/docentes/${docenteId}/toggle-status`)
        .expect(200);

      expect(response.body.data.estado).toBe(EstadoDocente.ACTIVO);
    });
  });

  describe('DELETE /api/docentes/:id', () => {
    let docenteId: string;

    beforeEach(async () => {
      const docente = await Docente.create(validDocenteData);
      docenteId = docente._id.toString();
    });

    it('debería eliminar un docente exitosamente', async () => {
      const response = await request(testApp)
        .delete(`/api/docentes/${docenteId}`)
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body.message).toContain('eliminado');

      // Verificar que se eliminó de la base de datos
      const deletedDocente = await Docente.findById(docenteId);
      expect(deletedDocente).toBeNull();
    });

    it('debería devolver 404 para ID inexistente', async () => {
      const fakeId = new mongoose.Types.ObjectId().toString();

      const response = await request(testApp)
        .delete(`/api/docentes/${fakeId}`)
        .expect(404);

      expect(response.body).toHaveProperty('success', false);
    });
  });

  describe('GET /api/docentes/stats', () => {
    beforeEach(async () => {
      // Crear docentes con diferentes estados
      await Docente.create([
        validDocenteData,
        secondDocenteData,
        { ...validDocenteData, email: 'test3@example.com', dni: '11111111', numeroLegajo: 'DOC003', estado: EstadoDocente.INACTIVO }
      ]);
    });

    it('debería obtener estadísticas de docentes', async () => {
      const response = await request(testApp)
        .get('/api/docentes/stats')
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body.data).toHaveProperty('total', 3);
      expect(response.body.data).toHaveProperty('activos', 2);
      expect(response.body.data).toHaveProperty('inactivos', 1);
    });
  });

  describe('Error Handling', () => {
    it('debería manejar rutas no encontradas', async () => {
      const response = await request(testApp)
        .get('/api/ruta-inexistente')
        .expect(404);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('No se encontró la ruta');
    });

    it('debería manejar errores internos del servidor', async () => {
      // Simular un error temporal
      const originalFind = Docente.find;
      Docente.find = jest.fn().mockRejectedValue(new Error('Database error'));

      const response = await request(testApp)
        .get('/api/docentes')
        .expect(500);

      expect(response.body).toHaveProperty('success', false);

      // Restaurar el método original
      Docente.find = originalFind;
    });
  });
});