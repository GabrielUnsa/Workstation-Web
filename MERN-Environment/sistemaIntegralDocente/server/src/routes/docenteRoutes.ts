import { Router } from 'express';
import {
  createDocente,
  getDocentes,
  getDocenteById,
  updateDocente,
  toggleDocenteStatus,
  deleteDocente,
  getDocenteStats
} from '../controllers/docenteController';
import { 
  validate, 
  validateQuery, 
  createDocenteSchema, 
  updateDocenteSchema, 
  querySchema 
} from '../middleware/validation';
import { uploadDocenteFiles } from '../middleware/upload';

const router = Router();

// Rutas para docentes
router
  .route('/')
  .get(validateQuery(querySchema), getDocentes)
  .post(uploadDocenteFiles, validate(createDocenteSchema), createDocente);

router
  .route('/stats')
  .get(getDocenteStats);

router
  .route('/:id')
  .get(getDocenteById)
  .put(uploadDocenteFiles, validate(updateDocenteSchema), updateDocente)
  .delete(deleteDocente);

router
  .route('/:id/toggle-status')
  .patch(toggleDocenteStatus);

export default router;