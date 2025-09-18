import mongoose, { Schema } from 'mongoose';
import { IDocenteDocument, EstadoDocente } from '../types/docente.types';

const docenteSchema = new Schema<IDocenteDocument>({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true,
    maxlength: [100, 'El nombre no puede exceder 100 caracteres']
  },
  apellido: {
    type: String,
    required: [true, 'El apellido es obligatorio'],
    trim: true,
    maxlength: [100, 'El apellido no puede exceder 100 caracteres']
  },
  telefono: {
    type: String,
    required: [true, 'El teléfono es obligatorio'],
    trim: true,
    validate: {
      validator: function(v: string) {
        return /^[\+]?[0-9\s\-\(\)]{8,20}$/.test(v);
      },
      message: 'El teléfono debe tener un formato válido'
    }
  },
  email: {
    type: String,
    required: [true, 'El email es obligatorio'],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'El email debe tener un formato válido'
    }
  },
  numeroEmergencia: {
    type: String,
    required: [true, 'El número de emergencia es obligatorio'],
    trim: true,
    validate: {
      validator: function(v: string) {
        return /^[\+]?[0-9\s\-\(\)]{8,20}$/.test(v);
      },
      message: 'El número de emergencia debe tener un formato válido'
    }
  },
  numeroLegajo: {
    type: String,
    required: [true, 'El número de legajo es obligatorio'],
    unique: true,
    trim: true,
    maxlength: [20, 'El número de legajo no puede exceder 20 caracteres']
  },
  dni: {
    type: String,
    required: [true, 'El DNI es obligatorio'],
    unique: true,
    trim: true,
    validate: {
      validator: function(v: string) {
        return /^[0-9]{7,8}$/.test(v);
      },
      message: 'El DNI debe tener entre 7 y 8 dígitos'
    }
  },
  horario: {
    type: String,
    default: null,
    validate: {
      validator: function(v: string | null) {
        return !v || v.endsWith('.pdf');
      },
      message: 'El horario debe ser un archivo PDF'
    }
  },
  resolucionTomaPosicion: {
    type: String,
    default: null,
    validate: {
      validator: function(v: string | null) {
        return !v || v.endsWith('.pdf');
      },
      message: 'La resolución de toma de posición debe ser un archivo PDF'
    }
  },
  resolucionDesignacion: {
    type: String,
    default: null,
    validate: {
      validator: function(v: string | null) {
        return !v || v.endsWith('.pdf');
      },
      message: 'La resolución de designación debe ser un archivo PDF'
    }
  },
  materiaACargo: {
    type: String,
    required: [true, 'La materia a cargo es obligatoria'],
    trim: true,
    maxlength: [200, 'La materia a cargo no puede exceder 200 caracteres']
  },
  estado: {
    type: String,
    enum: Object.values(EstadoDocente),
    default: EstadoDocente.ACTIVO
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: { createdAt: 'fechaCreacion', updatedAt: 'fechaActualizacion' },
  toJSON: {
    transform: function(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

// Índices para optimizar búsquedas
docenteSchema.index({ email: 1 });
docenteSchema.index({ numeroLegajo: 1 });
docenteSchema.index({ dni: 1 });
docenteSchema.index({ estado: 1 });
docenteSchema.index({ nombre: 1, apellido: 1 });

// Middleware para actualizar fechaActualizacion
docenteSchema.pre('save', function(next) {
  this.fechaActualizacion = new Date();
  next();
});

// Métodos estáticos
docenteSchema.statics.findActive = function() {
  return this.find({ estado: EstadoDocente.ACTIVO });
};

docenteSchema.statics.findByLegajo = function(numeroLegajo: string) {
  return this.findOne({ numeroLegajo });
};

docenteSchema.statics.findByDni = function(dni: string) {
  return this.findOne({ dni });
};

// Métodos de instancia
docenteSchema.methods.activate = function() {
  this.estado = EstadoDocente.ACTIVO;
  return this.save();
};

docenteSchema.methods.deactivate = function() {
  this.estado = EstadoDocente.INACTIVO;
  return this.save();
};

docenteSchema.methods.getNombreCompleto = function() {
  return `${this.nombre} ${this.apellido}`;
};

export const Docente = mongoose.model<IDocenteDocument>('Docente', docenteSchema);
export default Docente;