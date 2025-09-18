# Sistema Integral Docente

Sistema completo de gestión de personal docente universitario desarrollado con stack MERN (MongoDB, Express, React, Node.js) y TypeScript.

## 🚀 Características

- **CRUD completo de docentes** con validaciones robustas
- **Carga de archivos PDF** para horarios y resoluciones
- **Sistema de filtrado y búsqueda** avanzada
- **Dashboard con estadísticas** en tiempo real
- **Interfaz moderna** con Material-UI
- **API RESTful** con TypeScript
- **Validación de datos** en frontend y backend
- **Manejo de errores** centralizado
- **Responsive design** para dispositivos móviles

## 📋 Datos que gestiona

### Información del Docente
- Nombre y Apellido
- Número de Teléfono
- Email
- Número de Emergencia
- Número de Legajo (único)
- DNI (único)
- Materia a cargo
- Estado (Activo/Inactivo)

### Documentos (PDF)
- Horario
- Resolución de toma de posición
- Resolución de designación

## 🛠️ Tecnologías

### Backend
- **Node.js** con TypeScript
- **Express.js** - Framework web
- **MongoDB** - Base de datos
- **Mongoose** - ODM
- **Multer** - Carga de archivos
- **Joi** - Validación de schemas
- **Helmet** - Seguridad
- **CORS** - Cross-origin requests
- **Morgan** - Logging
- **Rate limiting** - Protección contra ataques

### Frontend
- **React 18** con TypeScript
- **Material-UI (MUI)** - Componentes UI
- **React Router** - Navegación
- **React Hook Form** - Formularios
- **Axios** - Cliente HTTP
- **Date-fns** - Manejo de fechas

## 📁 Estructura del Proyecto

```
sistemaIntegralDocente/
├── server/                     # Backend (Node.js + Express)
│   ├── src/
│   │   ├── config/            # Configuración DB y variables
│   │   ├── controllers/       # Controladores de rutas
│   │   ├── middleware/        # Middleware personalizado
│   │   ├── models/           # Modelos de Mongoose
│   │   ├── routes/           # Definición de rutas
│   │   ├── types/            # Tipos TypeScript
│   │   └── index.ts          # Punto de entrada
│   ├── uploads/              # Archivos subidos
│   └── package.json
└── client/                    # Frontend (React + TypeScript)
    ├── src/
    │   ├── components/       # Componentes React
    │   ├── context/         # Context API
    │   ├── hooks/           # Custom hooks
    │   ├── pages/           # Páginas principales
    │   ├── services/        # Servicios API
    │   ├── types/           # Tipos TypeScript
    │   └── utils/           # Utilidades
    └── package.json
```

## ⚙️ Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- MongoDB 5+
- npm o yarn

### 1. Clonar el repositorio
```bash
git clone <repository-url>
cd sistemaIntegralDocente
```

### 2. Configurar Backend

```bash
cd server
npm install
```

#### Variables de Entorno
Copiar `.env.example` a `.env` y configurar:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/sistema_docente
JWT_SECRET=tu_jwt_secret_aqui
JWT_EXPIRES_IN=7d
MAX_FILE_SIZE=5MB
ALLOWED_FILE_TYPES=application/pdf
```

### 3. Configurar Frontend

```bash
cd ../client
npm install
```

#### Variables de Entorno
Crear archivo `.env`:
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_UPLOADS_URL=http://localhost:5000/uploads
```

### 4. Iniciar MongoDB
```bash
# Ubuntu/Debian
sudo systemctl start mongod

# macOS con Homebrew
brew services start mongodb-community

# Windows
net start MongoDB
```

## 🚀 Ejecución

### Desarrollo

#### Backend (Puerto 5000)
```bash
cd server
npm run dev
```

#### Frontend (Puerto 3000)
```bash
cd client
npm start
```

### Producción

#### Backend
```bash
cd server
npm run build
npm start
```

#### Frontend
```bash
cd client
npm run build
# Servir con servidor web estático
```

## 📡 API Endpoints

### Docentes
- `GET /api/docentes` - Obtener docentes (con filtros y paginación)
- `GET /api/docentes/:id` - Obtener docente por ID
- `POST /api/docentes` - Crear nuevo docente
- `PUT /api/docentes/:id` - Actualizar docente
- `DELETE /api/docentes/:id` - Eliminar docente
- `PATCH /api/docentes/:id/toggle-status` - Habilitar/Deshabilitar
- `GET /api/docentes/stats` - Estadísticas

### Salud del Sistema
- `GET /api/health` - Estado del servidor

## 🔒 Validaciones

### Backend (Joi)
- Validación de tipos de datos
- Formatos de email y teléfono
- Unicidad de email, legajo y DNI
- Validación de archivos PDF (5MB máximo)

### Frontend (React Hook Form)
- Validación en tiempo real
- Mensajes de error personalizados
- Validación de formularios

## 📱 Funcionalidades de la Interfaz

### Dashboard
- Estadísticas de docentes (Total, Activos, Inactivos)
- Filtros por estado y búsqueda de texto
- Tabla responsive con paginación

### Gestión de Docentes
- Formulario modal para crear/editar
- Carga de archivos PDF con preview
- Confirmación para eliminaciones
- Toggle de estado (Activo/Inactivo)

### Características UX
- Loading states
- Notificaciones de éxito/error
- Diseño responsive
- Validación en tiempo real

## 🧪 Testing

```bash
# Backend
cd server
npm test

# Frontend  
cd client
npm test
```

## 📝 Logs

Los logs del servidor se muestran en consola durante desarrollo e incluyen:
- Requests HTTP con Morgan
- Errores de base de datos
- Eventos de conexión/desconexión

## 🔧 Configuración Adicional

### Límites de Rate Limiting
- 100 requests por 15 minutos por IP

### Seguridad
- Helmet para headers de seguridad
- CORS configurado para desarrollo/producción
- Validación de archivos subidos

### Base de Datos
- Índices optimizados para búsquedas
- Soft deletes para docentes
- Timestamps automáticos

## 🤝 Contribución

1. Fork el proyecto
2. Crear branch feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver [LICENSE](LICENSE) para detalles.

## 📞 Soporte

Para soporte técnico o preguntas:
- Crear issue en GitHub
- Email: [tu-email@dominio.com]

---

**Estado del Proyecto**: ✅ Funcional - Sistema completo con CRUD, validaciones y carga de archivos