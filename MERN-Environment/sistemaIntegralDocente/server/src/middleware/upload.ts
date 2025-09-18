import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Configuración de almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(process.cwd(), 'uploads');
    
    // Crear directorio si no existe
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Generar nombre único para el archivo
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname);
    const fieldName = file.fieldname;
    
    cb(null, `${fieldName}-${uniqueSuffix}${fileExtension}`);
  }
});

// Filtro para validar tipos de archivo
const fileFilter = (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  // Solo permitir archivos PDF
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Solo se permiten archivos PDF'));
  }
};

// Configuración de multer
export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB máximo
    files: 3 // Máximo 3 archivos por request
  }
});

// Middleware específico para docentes
export const uploadDocenteFiles = upload.fields([
  { name: 'horario', maxCount: 1 },
  { name: 'resolucionTomaPosicion', maxCount: 1 },
  { name: 'resolucionDesignacion', maxCount: 1 }
]);

// Función para eliminar archivo
export const deleteFile = (filePath: string): void => {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } catch (error) {
    console.error('Error eliminando archivo:', error);
  }
};

// Función para obtener la URL del archivo
export const getFileUrl = (filename: string): string => {
  return `/uploads/${filename}`;
};