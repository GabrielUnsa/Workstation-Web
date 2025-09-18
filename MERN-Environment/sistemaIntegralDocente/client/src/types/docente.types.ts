// Enum para el estado del docente
export enum EstadoDocente {
  ACTIVO = 'activo',
  INACTIVO = 'inactivo'
}

// Interface base para el docente
export interface IDocente {
  id?: string;
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
  fechaCreacion?: string;
  fechaActualizacion?: string;
}

// Interface para crear un nuevo docente
export interface ICreateDocenteRequest {
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  numeroEmergencia: string;
  numeroLegajo: string;
  dni: string;
  materiaACargo: string;
  horario?: File;
  resolucionTomaPosicion?: File;
  resolucionDesignacion?: File;
}

// Interface para actualizar un docente
export interface IUpdateDocenteRequest {
  nombre?: string;
  apellido?: string;
  telefono?: string;
  email?: string;
  numeroEmergencia?: string;
  numeroLegajo?: string;
  dni?: string;
  materiaACargo?: string;
  horario?: File;
  resolucionTomaPosicion?: File;
  resolucionDesignacion?: File;
}

// Interface para las respuestas de la API
export interface IApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  errors?: Array<{
    field: string;
    message: string;
  }>;
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

// Interface para la respuesta paginada
export interface IPaginatedResponse<T> {
  success: boolean;
  message: string;
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

// Interface para estadísticas
export interface IDocenteStats {
  total: number;
  activos: number;
  inactivos: number;
}

// Interface para el contexto de la aplicación
export interface IAppContext {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  success: string | null;
  setSuccess: (success: string | null) => void;
}

// Interface para los props de formulario
export interface IDocenteFormProps {
  docente?: IDocente;
  onSubmit: (docente: ICreateDocenteRequest | IUpdateDocenteRequest) => Promise<void>;
  onCancel: () => void;
  loading?: boolean;
}

// Interface para los props de la tabla
export interface IDocenteTableProps {
  docentes: IDocente[];
  loading?: boolean;
  onEdit: (docente: IDocente) => void;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string) => void;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    pages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
}

// Interface para los filtros de búsqueda
export interface ISearchFilters {
  search: string;
  estado: EstadoDocente | '';
}

// Interface para el estado de la aplicación
export interface IAppState {
  docentes: IDocente[];
  selectedDocente: IDocente | null;
  filters: ISearchFilters;
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  stats: IDocenteStats | null;
}

// Tipos para eventos de formulario
export type FormSubmitHandler = (data: ICreateDocenteRequest | IUpdateDocenteRequest) => Promise<void>;
export type FormCancelHandler = () => void;

// Tipos para manejo de archivos
export interface IFileUpload {
  file: File;
  name: string;
  type: 'horario' | 'resolucionTomaPosicion' | 'resolucionDesignacion';
}

// Interface para errores de validación
export interface IValidationError {
  field: string;
  message: string;
}