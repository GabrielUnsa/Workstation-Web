import { EstadoDocente } from '../types/docente.types';

// Formatear fecha para mostrar
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Formatear fecha corta
export const formatDateShort = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-AR');
};

// Obtener el color para el estado del docente
export const getEstadoColor = (estado: EstadoDocente): 'success' | 'default' | 'error' => {
  switch (estado) {
    case EstadoDocente.ACTIVO:
      return 'success';
    case EstadoDocente.INACTIVO:
      return 'error';
    default:
      return 'default';
  }
};

// Obtener el texto del estado
export const getEstadoText = (estado: EstadoDocente): string => {
  switch (estado) {
    case EstadoDocente.ACTIVO:
      return 'Activo';
    case EstadoDocente.INACTIVO:
      return 'Inactivo';
    default:
      return 'Desconocido';
  }
};

// Validar formato de email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validar formato de teléfono
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[+]?[0-9\s\-()]{8,20}$/;
  return phoneRegex.test(phone);
};

// Validar formato de DNI
export const isValidDNI = (dni: string): boolean => {
  const dniRegex = /^[0-9]{7,8}$/;
  return dniRegex.test(dni);
};

// Limpiar string para búsqueda
export const normalizeSearchString = (str: string): string => {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remover acentos
    .trim();
};

// Capitalizar primera letra
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Capitalizar cada palabra
export const capitalizeWords = (str: string): string => {
  return str.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

// Formatear nombre completo
export const formatFullName = (nombre: string, apellido: string): string => {
  return `${capitalizeWords(apellido)}, ${capitalizeWords(nombre)}`;
};

// Validar archivo PDF
export const isValidPDFFile = (file: File): boolean => {
  return file.type === 'application/pdf' && file.size <= 5 * 1024 * 1024; // 5MB máximo
};

// Obtener mensaje de error para archivo
export const getPDFFileError = (file: File): string | null => {
  if (file.type !== 'application/pdf') {
    return 'Solo se permiten archivos PDF';
  }
  if (file.size > 5 * 1024 * 1024) {
    return 'El archivo no puede superar los 5MB';
  }
  return null;
};

// Formatear tamaño de archivo
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Debounce function para búsquedas
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Generar ID único temporal
export const generateTempId = (): string => {
  return `temp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Obtener iniciales del nombre
export const getInitials = (nombre: string, apellido: string): string => {
  return `${nombre.charAt(0)}${apellido.charAt(0)}`.toUpperCase();
};

// Colores para avatares
export const getAvatarColor = (nombre: string, apellido: string): string => {
  const colors = [
    '#f44336', '#e91e63', '#9c27b0', '#673ab7',
    '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4',
    '#009688', '#4caf50', '#8bc34a', '#cddc39',
    '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'
  ];
  
  const fullName = `${nombre}${apellido}`;
  const hash = fullName.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  return colors[Math.abs(hash) % colors.length];
};

// Validar campos requeridos
export const validateRequiredFields = (data: Record<string, any>, requiredFields: string[]): string[] => {
  const errors: string[] = [];
  
  requiredFields.forEach(field => {
    if (!data[field] || (typeof data[field] === 'string' && data[field].trim() === '')) {
      errors.push(`El campo ${field} es obligatorio`);
    }
  });
  
  return errors;
};

// Limpiar objeto de campos vacíos
export const cleanEmptyFields = (obj: Record<string, any>): Record<string, any> => {
  const cleaned: Record<string, any> = {};
  
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (value !== null && value !== undefined && value !== '') {
      cleaned[key] = value;
    }
  });
  
  return cleaned;
};