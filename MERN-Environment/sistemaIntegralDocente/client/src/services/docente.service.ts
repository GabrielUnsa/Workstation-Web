import axios, { AxiosResponse } from 'axios';
import {
  IDocente,
  ICreateDocenteRequest,
  IUpdateDocenteRequest,
  IApiResponse,
  IPaginatedResponse,
  IQueryParams,
  IDocenteStats
} from '../types/docente.types';

// Configuración base de axios
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para manejar errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error('Error de conexión con el servidor');
  }
);

// Servicio para docentes
export class DocenteService {
  private static basePath = '/docentes';

  // Obtener todos los docentes con filtros y paginación
  static async getDocentes(params?: IQueryParams): Promise<IPaginatedResponse<IDocente>> {
    const response: AxiosResponse<IPaginatedResponse<IDocente>> = await api.get(
      this.basePath,
      { params }
    );
    return response.data;
  }

  // Obtener un docente por ID
  static async getDocenteById(id: string): Promise<IApiResponse<IDocente>> {
    const response: AxiosResponse<IApiResponse<IDocente>> = await api.get(
      `${this.basePath}/${id}`
    );
    return response.data;
  }

  // Crear un nuevo docente
  static async createDocente(docente: ICreateDocenteRequest): Promise<IApiResponse<IDocente>> {
    const formData = new FormData();
    
    // Agregar campos del formulario
    Object.entries(docente).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, value.toString());
        }
      }
    });

    const response: AxiosResponse<IApiResponse<IDocente>> = await api.post(
      this.basePath,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  }

  // Actualizar un docente
  static async updateDocente(
    id: string,
    docente: IUpdateDocenteRequest
  ): Promise<IApiResponse<IDocente>> {
    const formData = new FormData();
    
    // Agregar campos del formulario
    Object.entries(docente).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, value.toString());
        }
      }
    });

    const response: AxiosResponse<IApiResponse<IDocente>> = await api.put(
      `${this.basePath}/${id}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  }

  // Eliminar un docente
  static async deleteDocente(id: string): Promise<IApiResponse> {
    const response: AxiosResponse<IApiResponse> = await api.delete(
      `${this.basePath}/${id}`
    );
    return response.data;
  }

  // Habilitar/Deshabilitar docente
  static async toggleDocenteStatus(id: string): Promise<IApiResponse<IDocente>> {
    const response: AxiosResponse<IApiResponse<IDocente>> = await api.patch(
      `${this.basePath}/${id}/toggle-status`
    );
    return response.data;
  }

  // Obtener estadísticas de docentes
  static async getStats(): Promise<IApiResponse<IDocenteStats>> {
    const response: AxiosResponse<IApiResponse<IDocenteStats>> = await api.get(
      `${this.basePath}/stats`
    );
    return response.data;
  }

  // Obtener URL del archivo
  static getFileUrl(filename: string): string {
    return `${API_BASE_URL.replace('/api', '')}/uploads/${filename}`;
  }
}

// Función helper para manejar errores de la API
export const handleApiError = (error: any): string => {
  if (error.response?.data?.errors) {
    // Errores de validación
    return error.response.data.errors
      .map((err: any) => `${err.field}: ${err.message}`)
      .join(', ');
  }
  
  if (error.response?.data?.message) {
    return error.response.data.message;
  }
  
  if (error.message) {
    return error.message;
  }
  
  return 'Error desconocido';
};

export default DocenteService;