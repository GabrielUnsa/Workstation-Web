import { useState, useEffect, useCallback } from 'react';
import {
  IDocente,
  ICreateDocenteRequest,
  IUpdateDocenteRequest,
  IQueryParams,
  IDocenteStats,
  EstadoDocente
} from '../types/docente.types';
import { DocenteService, handleApiError } from '../services/docente.service';
import { useApp } from '../context/AppContext';

interface UseDocentesReturn {
  docentes: IDocente[];
  selectedDocente: IDocente | null;
  stats: IDocenteStats | null;
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  filters: {
    search: string;
    estado: EstadoDocente | '';
  };
  loadDocentes: (params?: IQueryParams) => Promise<void>;
  loadDocenteById: (id: string) => Promise<void>;
  createDocente: (docente: ICreateDocenteRequest) => Promise<void>;
  updateDocente: (id: string, docente: IUpdateDocenteRequest) => Promise<void>;
  deleteDocente: (id: string) => Promise<void>;
  toggleDocenteStatus: (id: string) => Promise<void>;
  loadStats: () => Promise<void>;
  setFilters: (filters: { search: string; estado: EstadoDocente | '' }) => void;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  clearSelectedDocente: () => void;
}

export const useDocentes = (): UseDocentesReturn => {
  const { setLoading, setError, setSuccess } = useApp();
  
  const [docentes, setDocentes] = useState<IDocente[]>([]);
  const [selectedDocente, setSelectedDocente] = useState<IDocente | null>(null);
  const [stats, setStats] = useState<IDocenteStats | null>(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0,
    hasNext: false,
    hasPrev: false,
  });
  const [filters, setFilters] = useState({
    search: '',
    estado: '' as EstadoDocente | '',
  });

  // Cargar estadísticas
  const loadStats = useCallback(async () => {
    try {
      const response = await DocenteService.getStats();
      setStats(response.data || null);
    } catch (error) {
      console.error('Error cargando estadísticas:', error);
    }
  }, []);

  // Cargar docentes con filtros y paginación
  const loadDocentes = useCallback(async (params?: IQueryParams) => {
    try {
      setLoading(true);
      setError(null);
      
      const queryParams = {
        page: pagination.page,
        limit: pagination.limit,
        search: filters.search,
        estado: filters.estado || undefined,
        ...params,
      };

      const response = await DocenteService.getDocentes(queryParams);
      
      setDocentes(response.data);
      setPagination(response.pagination);
      
    } catch (error) {
      setError(handleApiError(error));
    } finally {
      setLoading(false);
    }
  }, [pagination.page, pagination.limit, filters.search, filters.estado, setLoading, setError]);

  // Cargar un docente específico por ID
  const loadDocenteById = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await DocenteService.getDocenteById(id);
      setSelectedDocente(response.data || null);
      
    } catch (error) {
      setError(handleApiError(error));
    } finally {
      setLoading(false);
    }
  }, [setLoading, setError]);

  // Crear un nuevo docente
  const createDocente = useCallback(async (docente: ICreateDocenteRequest) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await DocenteService.createDocente(docente);
      setSuccess(response.message);
      
      // Recargar la lista de docentes
      await loadDocentes();
      
    } catch (error) {
      setError(handleApiError(error));
      throw error; // Re-lanzar para que el componente pueda manejarlo
    } finally {
      setLoading(false);
    }
  }, [setLoading, setError, setSuccess, loadDocentes]);

  // Actualizar un docente existente
  const updateDocente = useCallback(async (id: string, docente: IUpdateDocenteRequest) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await DocenteService.updateDocente(id, docente);
      setSuccess(response.message);
      
      // Actualizar el docente en la lista
      setDocentes(prev => 
        prev.map(doc => doc.id === id ? (response.data || doc) : doc)
      );
      
      // Si es el docente seleccionado, actualizarlo también
      if (selectedDocente?.id === id) {
        setSelectedDocente(response.data || null);
      }
      
    } catch (error) {
      setError(handleApiError(error));
      throw error;
    } finally {
      setLoading(false);
    }
  }, [setLoading, setError, setSuccess, selectedDocente]);

  // Eliminar un docente
  const deleteDocente = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await DocenteService.deleteDocente(id);
      setSuccess(response.message);
      
      // Remover el docente de la lista
      setDocentes(prev => prev.filter(doc => doc.id !== id));
      
      // Si era el docente seleccionado, limpiarlo
      if (selectedDocente?.id === id) {
        setSelectedDocente(null);
      }
      
      // Recargar estadísticas
      await loadStats();
      
    } catch (error) {
      setError(handleApiError(error));
      throw error;
    } finally {
      setLoading(false);
    }
  }, [setLoading, setError, setSuccess, selectedDocente, loadStats]);

  // Habilitar/Deshabilitar docente
  const toggleDocenteStatus = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await DocenteService.toggleDocenteStatus(id);
      setSuccess(response.message);
      
      // Actualizar el docente en la lista
      setDocentes(prev => 
        prev.map(doc => doc.id === id ? (response.data || doc) : doc)
      );
      
      // Si es el docente seleccionado, actualizarlo también
      if (selectedDocente?.id === id) {
        setSelectedDocente(response.data || null);
      }
      
      // Recargar estadísticas
      await loadStats();
      
    } catch (error) {
      setError(handleApiError(error));
    } finally {
      setLoading(false);
    }
  }, [setLoading, setError, setSuccess, selectedDocente, loadStats]);

  // Cambiar página
  const setPage = useCallback((page: number) => {
    setPagination(prev => ({ ...prev, page }));
  }, []);

  // Cambiar tamaño de página
  const setPageSize = useCallback((pageSize: number) => {
    setPagination(prev => ({ ...prev, limit: pageSize, page: 1 }));
  }, []);

  // Limpiar docente seleccionado
  const clearSelectedDocente = useCallback(() => {
    setSelectedDocente(null);
  }, []);

  // Cargar datos iniciales
  useEffect(() => {
    loadDocentes();
    loadStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Recargar docentes cuando cambien los filtros o la paginación
  useEffect(() => {
    loadDocentes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.page, pagination.limit, filters]);

  return {
    docentes,
    selectedDocente,
    stats,
    pagination,
    filters,
    loadDocentes,
    loadDocenteById,
    createDocente,
    updateDocente,
    deleteDocente,
    toggleDocenteStatus,
    loadStats,
    setFilters,
    setPage,
    setPageSize,
    clearSelectedDocente,
  };
};