import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IAppContext } from '../types/docente.types';

// Crear el contexto
const AppContext = createContext<IAppContext | undefined>(undefined);

// Props del provider
interface AppProviderProps {
  children: ReactNode;
}

// Provider del contexto
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const value: IAppContext = {
    loading,
    setLoading,
    error,
    setError,
    success,
    setSuccess,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useApp = (): IAppContext => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp debe ser usado dentro de un AppProvider');
  }
  return context;
};

export default AppContext;