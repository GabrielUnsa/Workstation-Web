import { Request, Response } from 'express';
import Docente from '../models/Docente';
import { 
  ICreateDocente, 
  IUpdateDocente, 
  IQueryParams, 
  IDocenteFilters,
  IPaginatedResponse,
  MulterRequest,
  EstadoDocente
} from '../types/docente.types';
import { ApplicationError, catchAsync } from '../middleware/errorHandler';
import { deleteFile } from '../middleware/upload';
import path from 'path';

// Crear un nuevo docente
export const createDocente = catchAsync(async (req: MulterRequest, res: Response) => {
  const docenteData: ICreateDocente = req.body;
  
  // Manejar archivos subidos
  if (req.files) {
    if (req.files.horario) {
      docenteData.horario = req.files.horario[0];
    }
    if (req.files.resolucionTomaPosicion) {
      docenteData.resolucionTomaPosicion = req.files.resolucionTomaPosicion[0];
    }
    if (req.files.resolucionDesignacion) {
      docenteData.resolucionDesignacion = req.files.resolucionDesignacion[0];
    }
  }

  // Verificar unicidad de email, legajo y DNI
  const existingDocente = await Docente.findOne({
    $or: [
      { email: docenteData.email },
      { numeroLegajo: docenteData.numeroLegajo },
      { dni: docenteData.dni }
    ]
  });

  if (existingDocente) {
    let duplicatedField = '';
    if (existingDocente.email === docenteData.email) duplicatedField = 'email';
    else if (existingDocente.numeroLegajo === docenteData.numeroLegajo) duplicatedField = 'número de legajo';
    else if (existingDocente.dni === docenteData.dni) duplicatedField = 'DNI';
    
    throw new ApplicationError(`El ${duplicatedField} ya está registrado`, 400);
  }

  // Preparar datos para crear el docente
  const newDocenteData: any = {
    ...docenteData,
    horario: req.files?.horario?.[0]?.filename || null,
    resolucionTomaPosicion: req.files?.resolucionTomaPosicion?.[0]?.filename || null,
    resolucionDesignacion: req.files?.resolucionDesignacion?.[0]?.filename || null
  };

  const newDocente = await Docente.create(newDocenteData);

  res.status(201).json({
    success: true,
    message: 'Docente creado exitosamente',
    data: newDocente
  });
});

// Obtener todos los docentes con paginación y filtros
export const getDocentes = catchAsync(async (req: Request, res: Response) => {
  const query = req.query as IQueryParams;
  const { page = 1, limit = 10, search, estado, sortBy = 'fechaCreacion', sortOrder = 'desc' } = query;

  // Construir filtros
  const filters: IDocenteFilters = {};
  
  if (estado) {
    filters.estado = estado;
  }

  if (search) {
    const searchRegex = new RegExp(search, 'i');
    filters.$or = [
      { nombre: searchRegex },
      { apellido: searchRegex },
      { email: searchRegex },
      { numeroLegajo: searchRegex },
      { dni: searchRegex },
      { materiaACargo: searchRegex }
    ];
  }

  // Configurar ordenamiento
  const sortOptions: any = {};
  sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;

  // Ejecutar consulta con paginación
  const skip = (page - 1) * limit;
  
  const [docentes, total] = await Promise.all([
    Docente.find(filters)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit)
      .lean(),
    Docente.countDocuments(filters)
  ]);

  // Preparar respuesta paginada
  const pagination = {
    page,
    limit,
    total,
    pages: Math.ceil(total / limit),
    hasNext: page < Math.ceil(total / limit),
    hasPrev: page > 1
  };

  const response: IPaginatedResponse<any> = {
    data: docentes,
    pagination
  };

  res.status(200).json({
    success: true,
    message: 'Docentes obtenidos exitosamente',
    ...response
  });
});

// Obtener un docente por ID
export const getDocenteById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  
  const docente = await Docente.findById(id);
  
  if (!docente) {
    throw new ApplicationError('Docente no encontrado', 404);
  }

  res.status(200).json({
    success: true,
    message: 'Docente obtenido exitosamente',
    data: docente
  });
});

// Actualizar un docente
export const updateDocente = catchAsync(async (req: MulterRequest, res: Response) => {
  const { id } = req.params;
  const updateData: IUpdateDocente = req.body;

  const docente = await Docente.findById(id);
  
  if (!docente) {
    throw new ApplicationError('Docente no encontrado', 404);
  }

  // Verificar unicidad de campos si se están actualizando
  if (updateData.email || updateData.numeroLegajo || updateData.dni) {
    const existingDocente = await Docente.findOne({
      _id: { $ne: id },
      $or: [
        ...(updateData.email ? [{ email: updateData.email }] : []),
        ...(updateData.numeroLegajo ? [{ numeroLegajo: updateData.numeroLegajo }] : []),
        ...(updateData.dni ? [{ dni: updateData.dni }] : [])
      ]
    });

    if (existingDocente) {
      let duplicatedField = '';
      if (existingDocente.email === updateData.email) duplicatedField = 'email';
      else if (existingDocente.numeroLegajo === updateData.numeroLegajo) duplicatedField = 'número de legajo';
      else if (existingDocente.dni === updateData.dni) duplicatedField = 'DNI';
      
      throw new ApplicationError(`El ${duplicatedField} ya está registrado`, 400);
    }
  }

  // Manejar archivos subidos
  const updatedFields: any = { ...updateData };

  if (req.files) {
    if (req.files.horario) {
      // Eliminar archivo anterior si existe
      if (docente.horario) {
        deleteFile(path.join(process.cwd(), 'uploads', docente.horario));
      }
      updatedFields.horario = req.files.horario[0].filename;
    }
    
    if (req.files.resolucionTomaPosicion) {
      if (docente.resolucionTomaPosicion) {
        deleteFile(path.join(process.cwd(), 'uploads', docente.resolucionTomaPosicion));
      }
      updatedFields.resolucionTomaPosicion = req.files.resolucionTomaPosicion[0].filename;
    }
    
    if (req.files.resolucionDesignacion) {
      if (docente.resolucionDesignacion) {
        deleteFile(path.join(process.cwd(), 'uploads', docente.resolucionDesignacion));
      }
      updatedFields.resolucionDesignacion = req.files.resolucionDesignacion[0].filename;
    }
  }

  const updatedDocente = await Docente.findByIdAndUpdate(
    id,
    updatedFields,
    { new: true, runValidators: true }
  );

  res.status(200).json({
    success: true,
    message: 'Docente actualizado exitosamente',
    data: updatedDocente
  });
});

// Habilitar/Deshabilitar docente
export const toggleDocenteStatus = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  
  const docente = await Docente.findById(id);
  
  if (!docente) {
    throw new ApplicationError('Docente no encontrado', 404);
  }

  const newStatus = docente.estado === EstadoDocente.ACTIVO ? EstadoDocente.INACTIVO : EstadoDocente.ACTIVO;
  docente.estado = newStatus;
  await docente.save();

  const action = newStatus === EstadoDocente.ACTIVO ? 'habilitado' : 'deshabilitado';

  res.status(200).json({
    success: true,
    message: `Docente ${action} exitosamente`,
    data: docente
  });
});

// Eliminar docente (soft delete)
export const deleteDocente = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  
  const docente = await Docente.findById(id);
  
  if (!docente) {
    throw new ApplicationError('Docente no encontrado', 404);
  }

  // Eliminar archivos asociados
  if (docente.horario) {
    deleteFile(path.join(process.cwd(), 'uploads', docente.horario));
  }
  if (docente.resolucionTomaPosicion) {
    deleteFile(path.join(process.cwd(), 'uploads', docente.resolucionTomaPosicion));
  }
  if (docente.resolucionDesignacion) {
    deleteFile(path.join(process.cwd(), 'uploads', docente.resolucionDesignacion));
  }

  await Docente.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
    message: 'Docente eliminado exitosamente'
  });
});

// Obtener estadísticas de docentes
export const getDocenteStats = catchAsync(async (req: Request, res: Response) => {
  const stats = await Docente.aggregate([
    {
      $group: {
        _id: '$estado',
        count: { $sum: 1 }
      }
    }
  ]);

  const total = await Docente.countDocuments();
  
  const formattedStats = {
    total,
    activos: stats.find(s => s._id === EstadoDocente.ACTIVO)?.count || 0,
    inactivos: stats.find(s => s._id === EstadoDocente.INACTIVO)?.count || 0
  };

  res.status(200).json({
    success: true,
    message: 'Estadísticas obtenidas exitosamente',
    data: formattedStats
  });
});