import Docente from '../../models/Docente';
import { EstadoDocente } from '../../types/docente.types';

describe('Modelo Docente', () => {
  describe('Validaciones', () => {
    const docenteValido: {
      nombre?: string,
      apellido?: string,
      telefono?: string,
      email?: string,
      numeroEmergencia?: string,
      numeroLegajo?: string,
      dni?: string,
      materiaACargo?: string,
      estado?: string
    } 
    = {
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

    it('debería crear un docente válido', async () => {
      const docente = new Docente(docenteValido);
      const docenteGuardado = await docente.save();

      expect(docenteGuardado._id).toBeDefined();
      expect(docenteGuardado.nombre).toBe(docenteValido.nombre);
      expect(docenteGuardado.apellido).toBe(docenteValido.apellido);
      expect(docenteGuardado.email).toBe(docenteValido.email);
      expect(docenteGuardado.dni).toBe(docenteValido.dni);
      expect(docenteGuardado.estado).toBe(EstadoDocente.ACTIVO);
      expect(docenteGuardado.fechaCreacion).toBeDefined();
      expect(docenteGuardado.fechaActualizacion).toBeDefined();
    });

    it('debería fallar si falta el nombre', async () => {
      const docenteSinNombre = { ...docenteValido };
      delete docenteSinNombre.nombre;

      const docente = new Docente(docenteSinNombre);
      
      await expect(docente.save()).rejects.toThrow();
    });

    it('debería fallar si falta el apellido', async () => {
      const docenteSinApellido = { ...docenteValido };
      delete docenteSinApellido.apellido;

      const docente = new Docente(docenteSinApellido);
      
      await expect(docente.save()).rejects.toThrow();
    });

    it('debería fallar si falta el email', async () => {
      const docenteSinEmail = { ...docenteValido };
      delete docenteSinEmail.email;

      const docente = new Docente(docenteSinEmail);
      
      await expect(docente.save()).rejects.toThrow();
    });

    it('debería fallar con email inválido', async () => {
      const docenteEmailInvalido = {
        ...docenteValido,
        email: 'email-invalido'
      };

      const docente = new Docente(docenteEmailInvalido);
      
      await expect(docente.save()).rejects.toThrow();
    });

    it('debería fallar si falta el teléfono', async () => {
      const docenteSinTelefono = { ...docenteValido };
      delete docenteSinTelefono.telefono;

      const docente = new Docente(docenteSinTelefono);
      
      await expect(docente.save()).rejects.toThrow();
    });

    it('debería fallar con teléfono inválido', async () => {
      const docenteTelefonoInvalido = {
        ...docenteValido,
        telefono: '123'
      };

      const docente = new Docente(docenteTelefonoInvalido);
      
      await expect(docente.save()).rejects.toThrow();
    });

    it('debería fallar si falta el DNI', async () => {
      const docenteSinDni = { ...docenteValido };
      delete docenteSinDni.dni;

      const docente = new Docente(docenteSinDni);
      
      await expect(docente.save()).rejects.toThrow();
    });

    it('debería fallar con DNI inválido', async () => {
      const docenteDniInvalido = {
        ...docenteValido,
        dni: '123'
      };

      const docente = new Docente(docenteDniInvalido);
      
      await expect(docente.save()).rejects.toThrow();
    });

    it('debería fallar si falta el número de legajo', async () => {
      const docenteSinLegajo = { ...docenteValido };
      delete docenteSinLegajo.numeroLegajo;

      const docente = new Docente(docenteSinLegajo);
      
      await expect(docente.save()).rejects.toThrow();
    });

    it('debería fallar si falta la materia a cargo', async () => {
      const docenteSinMateria = { ...docenteValido };
      delete docenteSinMateria.materiaACargo;

      const docente = new Docente(docenteSinMateria);
      
      await expect(docente.save()).rejects.toThrow();
    });

    it('debería fallar con estado inválido', async () => {
      const docenteEstadoInvalido = {
        ...docenteValido,
        estado: 'estado_invalido' as EstadoDocente
      };

      const docente = new Docente(docenteEstadoInvalido);
      
      await expect(docente.save()).rejects.toThrow();
    });

    it('debería trimear espacios en nombre y apellido', async () => {
      const docenteConEspacios = {
        ...docenteValido,
        nombre: '  Juan  ',
        apellido: '  Pérez  '
      };

      const docente = new Docente(docenteConEspacios);
      const docenteGuardado = await docente.save();

      expect(docenteGuardado.nombre).toBe('Juan');
      expect(docenteGuardado.apellido).toBe('Pérez');
    });

    it('debería rechazar nombres muy largos', async () => {
      const docenteNombreLargo = {
        ...docenteValido,
        nombre: 'a'.repeat(101)
      };

      const docente = new Docente(docenteNombreLargo);
      
      await expect(docente.save()).rejects.toThrow();
    });

    it('debería rechazar apellidos muy largos', async () => {
      const docenteApellidoLargo = {
        ...docenteValido,
        apellido: 'a'.repeat(101)
      };

      const docente = new Docente(docenteApellidoLargo);
      
      await expect(docente.save()).rejects.toThrow();
    });
  });

  describe('Funcionalidades del modelo', () => {
    it('debería generar fechas de creación y actualización automáticamente', async () => {
      const docenteData = {
        nombre: 'María',
        apellido: 'González',
        telefono: '+54 9 387 555-1234',
        email: 'maria.gonzalez@universidad.edu.ar',
        numeroEmergencia: '+54 9 387 555-5678',
        numeroLegajo: 'DOC002',
        dni: '87654321',
        materiaACargo: 'Física I',
        estado: EstadoDocente.ACTIVO
      };

      const docente = new Docente(docenteData);
      const docenteGuardado = await docente.save();

      expect(docenteGuardado.fechaCreacion).toBeDefined();
      expect(docenteGuardado.fechaActualizacion).toBeDefined();
      expect(docenteGuardado.fechaCreacion).toEqual(docenteGuardado.fechaActualizacion);
    });

    it('debería actualizar la fecha de actualización al modificar', async () => {
      const docenteData = {
        nombre: 'Carlos',
        apellido: 'Rodríguez',
        telefono: '+54 9 387 777-8888',
        email: 'carlos.rodriguez@universidad.edu.ar',
        numeroEmergencia: '+54 9 387 777-9999',
        numeroLegajo: 'DOC003',
        dni: '11223344',
        materiaACargo: 'Química I',
        estado: EstadoDocente.ACTIVO
      };

      const docente = new Docente(docenteData);
      const docenteGuardado = await docente.save();
      const fechaCreacionOriginal = docenteGuardado.fechaCreacion;

      // Simular pasar tiempo
      await new Promise(resolve => setTimeout(resolve, 100));

      docenteGuardado.nombre = 'Carlos Alberto';
      const docenteActualizado = await docenteGuardado.save();

      expect(docenteActualizado.fechaCreacion).toEqual(fechaCreacionOriginal);
      expect(docenteActualizado.fechaActualizacion).not.toEqual(fechaCreacionOriginal);
    });

    it('debería permitir campos opcionales vacíos', async () => {
      const docenteMinimo = {
        nombre: 'Ana',
        apellido: 'López',
        telefono: '+54 9 387 999-0000',
        email: 'ana.lopez@universidad.edu.ar',
        numeroEmergencia: '+54 9 387 999-1111',
        numeroLegajo: 'DOC004',
        dni: '55667788',
        materiaACargo: 'Historia',
        estado: EstadoDocente.ACTIVO
      };

      const docente = new Docente(docenteMinimo);
      const docenteGuardado = await docente.save();

      expect(docenteGuardado._id).toBeDefined();
      expect(docenteGuardado.horario).toBeUndefined();
      expect(docenteGuardado.resolucionTomaPosicion).toBeUndefined();
      expect(docenteGuardado.resolucionDesignacion).toBeUndefined();
    });

    it('debería permitir asignar archivos opcionales', async () => {
      const docenteConArchivos = {
        nombre: 'Roberto',
        apellido: 'Fernández',
        telefono: '+54 9 387 444-5555',
        email: 'roberto.fernandez@universidad.edu.ar',
        numeroEmergencia: '+54 9 387 444-6666',
        numeroLegajo: 'DOC005',
        dni: '99887766',
        materiaACargo: 'Programación',
        estado: EstadoDocente.ACTIVO,
        horario: '/uploads/horarios/horario_doc005.pdf',
        resolucionTomaPosicion: '/uploads/resoluciones/toma_posicion_doc005.pdf',
        resolucionDesignacion: '/uploads/resoluciones/designacion_doc005.pdf'
      };

      const docente = new Docente(docenteConArchivos);
      const docenteGuardado = await docente.save();

      expect(docenteGuardado.horario).toBe(docenteConArchivos.horario);
      expect(docenteGuardado.resolucionTomaPosicion).toBe(docenteConArchivos.resolucionTomaPosicion);
      expect(docenteGuardado.resolucionDesignacion).toBe(docenteConArchivos.resolucionDesignacion);
    });
  });

  describe('Unicidad', () => {
    const docenteBase = {
      nombre: 'Luis',
      apellido: 'Martínez',
      telefono: '+54 9 387 123-9999',
      email: 'luis.martinez@universidad.edu.ar',
      numeroEmergencia: '+54 9 387 987-6543',
      numeroLegajo: 'DOC006',
      dni: '12121212',
      materiaACargo: 'Estadística',
      estado: EstadoDocente.ACTIVO
    };

    it('debería permitir emails únicos', async () => {
      const docente1 = new Docente(docenteBase);
      await docente1.save();

      const docente2 = new Docente({
        ...docenteBase,
        email: 'otro.email@universidad.edu.ar',
        dni: '13131313',
        numeroLegajo: 'DOC007'
      });

      expect(async () => await docente2.save()).not.toThrow();
    });

    it('debería permitir DNIs únicos', async () => {
      const docente1 = new Docente({
        ...docenteBase,
        email: 'unico1@universidad.edu.ar',
        dni: '14141414',
        numeroLegajo: 'DOC008'
      });
      await docente1.save();

      const docente2 = new Docente({
        ...docenteBase,
        email: 'unico2@universidad.edu.ar',
        dni: '15151515',
        numeroLegajo: 'DOC009'
      });

      expect(async () => await docente2.save()).not.toThrow();
    });

    it('debería permitir números de legajo únicos', async () => {
      const docente1 = new Docente({
        ...docenteBase,
        email: 'legajo1@universidad.edu.ar',
        dni: '16161616',
        numeroLegajo: 'DOC010'
      });
      await docente1.save();

      const docente2 = new Docente({
        ...docenteBase,
        email: 'legajo2@universidad.edu.ar',
        dni: '17171717',
        numeroLegajo: 'DOC011'
      });

      expect(async () => await docente2.save()).not.toThrow();
    });
  });
});