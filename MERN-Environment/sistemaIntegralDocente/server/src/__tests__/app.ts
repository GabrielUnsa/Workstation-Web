import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import path from 'path';

import docenteRoutes from '../routes/docenteRoutes';
import { globalErrorHandler, notFound } from '../middleware/errorHandler';

const createApp = () => {
  const app = express();

  // Middleware de seguridad
  app.use(helmet());

  // Rate limiting (más permisivo en tests)
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 1000, // máximo 1000 requests en tests
    message: {
      success: false,
      message: 'Demasiadas solicitudes, intenta de nuevo más tarde'
    }
  });
  app.use('/api/', limiter);

  // CORS
  app.use(cors({
    origin: true, // Permitir todos los orígenes en tests
    credentials: true,
    optionsSuccessStatus: 200
  }));

  // Logging solo en desarrollo
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  // Body parser
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // Servir archivos estáticos (uploads)
  app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

  // Rutas de la API
  app.use('/api/docentes', docenteRoutes);

  // Ruta de salud del servidor
  app.get('/api/health', (req, res) => {
    res.status(200).json({
      success: true,
      message: 'Servidor funcionando correctamente',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'test'
    });
  });

  // Manejo de rutas no encontradas
  app.use(notFound);

  // Middleware global de manejo de errores
  app.use(globalErrorHandler);

  return app;
};

export default createApp;