import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/sistema_docente',
  jwtSecret: process.env.JWT_SECRET || 'fallback_secret_change_in_production',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  nodeEnv: process.env.NODE_ENV || 'development',
  maxFileSize: process.env.MAX_FILE_SIZE || '5MB',
  allowedFileTypes: process.env.ALLOWED_FILE_TYPES?.split(',') || ['application/pdf']
};

export default config;