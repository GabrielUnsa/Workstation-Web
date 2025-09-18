import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import path from 'path';

import connectDB from './config/database';
import config from './config/config';
import docenteRoutes from './routes/docenteRoutes';
import { globalErrorHandler, notFound } from './middleware/errorHandler';

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware de seguridad
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máximo 100 requests por ventana de tiempo
  message: {
    success: false,
    message: 'Demasiadas solicitudes, intenta de nuevo más tarde'
  }
});
app.use('/api/', limiter);

// CORS
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://tu-dominio.com'] // Cambiar por el dominio de producción
    : ['http://localhost:3000', 'http://localhost:5173'], // URLs de desarrollo
  credentials: true,
  optionsSuccessStatus: 200
}));

// Logging
if (config.nodeEnv === 'development') {
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
    environment: config.nodeEnv
  });
});

// Manejo de rutas no encontradas
app.use(notFound);

// Middleware global de manejo de errores
app.use(globalErrorHandler);

// Iniciar servidor
const PORT = config.port;

const server = app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en puerto ${PORT}`);
  console.log(`📱 Entorno: ${config.nodeEnv}`);
  console.log(`🔗 URL: http://localhost:${PORT}`);
  console.log(`📊 API Health: http://localhost:${PORT}/api/health`);
});

// Manejo graceful de cierre del servidor
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM recibido. Cerrando servidor...');
  server.close(() => {
    console.log('💤 Proceso terminado');
  });
});

process.on('SIGINT', () => {
  console.log('👋 SIGINT recibido. Cerrando servidor...');
  server.close(() => {
    console.log('💤 Proceso terminado');
  });
});

export default app;