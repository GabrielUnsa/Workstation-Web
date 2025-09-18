import React, { useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Alert,
  CircularProgress,
  Typography,
  Stack,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FileUpload from '../common/FileUpload';
import { IDocente, EstadoDocente } from '../../types/docente.types';

interface DocenteFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => Promise<void>;
  docente?: IDocente | null;
  loading?: boolean;
}

// Schema de validación con Yup
const docenteSchema = yup.object({
  nombre: yup
    .string()
    .required('El nombre es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede exceder 50 caracteres'),
  apellido: yup
    .string()
    .required('El apellido es obligatorio')
    .min(2, 'El apellido debe tener al menos 2 caracteres')
    .max(50, 'El apellido no puede exceder 50 caracteres'),
  email: yup
    .string()
    .required('El email es obligatorio')
    .email('Debe ser un email válido'),
  telefono: yup
    .string()
    .required('El teléfono es obligatorio')
    .matches(/^[+]?[0-9\s\-()]{8,20}$/, 'Formato de teléfono inválido'),
  numeroEmergencia: yup
    .string()
    .required('El número de emergencia es obligatorio')
    .matches(/^[+]?[0-9\s\-()]{8,20}$/, 'Formato de teléfono inválido'),
  dni: yup
    .string()
    .required('El DNI es obligatorio')
    .matches(/^[0-9]{7,8}$/, 'El DNI debe tener entre 7 y 8 dígitos'),
  numeroLegajo: yup
    .string()
    .required('El número de legajo es obligatorio')
    .min(1, 'El número de legajo es obligatorio'),
  materiaACargo: yup
    .string()
    .required('La materia a cargo es obligatoria')
    .min(2, 'La materia debe tener al menos 2 caracteres'),
  estado: yup
    .string()
    .oneOf(Object.values(EstadoDocente), 'Estado inválido')
    .required('El estado es obligatorio'),
});

type DocenteFormData = yup.InferType<typeof docenteSchema>;

const DocenteForm: React.FC<DocenteFormProps> = ({
  open,
  onClose,
  onSubmit,
  docente,
  loading = false,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DocenteFormData>({
    resolver: yupResolver(docenteSchema),
    defaultValues: {
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      numeroEmergencia: '',
      dni: '',
      numeroLegajo: '',
      materiaACargo: '',
      estado: EstadoDocente.ACTIVO,
    },
  });

  const [horarioFile, setHorarioFile] = React.useState<File | null>(null);
  const [resolucionTomaPosicionFile, setResolucionTomaPosicionFile] = React.useState<File | null>(null);
  const [resolucionDesignacionFile, setResolucionDesignacionFile] = React.useState<File | null>(null);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  // Cargar datos del docente si está editando
  useEffect(() => {
    if (docente) {
      reset({
        nombre: docente.nombre,
        apellido: docente.apellido,
        email: docente.email,
        telefono: docente.telefono,
        numeroEmergencia: docente.numeroEmergencia,
        dni: docente.dni,
        numeroLegajo: docente.numeroLegajo,
        materiaACargo: docente.materiaACargo,
        estado: docente.estado,
      });
    } else {
      reset({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        numeroEmergencia: '',
        dni: '',
        numeroLegajo: '',
        materiaACargo: '',
        estado: EstadoDocente.ACTIVO,
      });
    }
  }, [docente, reset]);

  const handleFormSubmit = async (data: DocenteFormData) => {
    try {
      setSubmitError(null);
      
      const formData = new FormData();
      
      // Agregar campos del formulario
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value.toString());
      });

      // Agregar archivos si existen
      if (horarioFile) {
        formData.append('horario', horarioFile);
      }
      if (resolucionTomaPosicionFile) {
        formData.append('resolucionTomaPosicion', resolucionTomaPosicionFile);
      }
      if (resolucionDesignacionFile) {
        formData.append('resolucionDesignacion', resolucionDesignacionFile);
      }

      await onSubmit(formData);
      handleClose();
    } catch (error) {
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : 'Error al guardar el docente'
      );
    }
  };

  const handleClose = () => {
    reset();
    setHorarioFile(null);
    setResolucionTomaPosicionFile(null);
    setResolucionDesignacionFile(null);
    setSubmitError(null);
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose} 
      maxWidth="md" 
      fullWidth
      PaperProps={{
        sx: { minHeight: '80vh' }
      }}
    >
      <DialogTitle>
        {docente ? 'Editar Docente' : 'Nuevo Docente'}
      </DialogTitle>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <DialogContent>
          {submitError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {submitError}
            </Alert>
          )}

          <Stack spacing={3}>
            {/* Información Personal */}
            <Box>
              <Typography variant="h6" color="primary" gutterBottom>
                Información Personal
              </Typography>
              <Stack spacing={2}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Controller
                    name="nombre"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Nombre"
                        fullWidth
                        required
                        error={!!errors.nombre}
                        helperText={errors.nombre?.message}
                        disabled={isSubmitting}
                      />
                    )}
                  />
                  <Controller
                    name="apellido"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Apellido"
                        fullWidth
                        required
                        error={!!errors.apellido}
                        helperText={errors.apellido?.message}
                        disabled={isSubmitting}
                      />
                    )}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Controller
                    name="dni"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="DNI"
                        fullWidth
                        required
                        type="number"
                        error={!!errors.dni}
                        helperText={errors.dni?.message}
                        disabled={isSubmitting}
                      />
                    )}
                  />
                  <Controller
                    name="numeroLegajo"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Número de Legajo"
                        fullWidth
                        required
                        error={!!errors.numeroLegajo}
                        helperText={errors.numeroLegajo?.message}
                        disabled={isSubmitting}
                      />
                    )}
                  />
                </Stack>
              </Stack>
            </Box>

            {/* Información de Contacto */}
            <Box>
              <Typography variant="h6" color="primary" gutterBottom>
                Información de Contacto
              </Typography>
              <Stack spacing={2}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      type="email"
                      fullWidth
                      required
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      disabled={isSubmitting}
                    />
                  )}
                />

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Controller
                    name="telefono"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Teléfono"
                        fullWidth
                        required
                        error={!!errors.telefono}
                        helperText={errors.telefono?.message}
                        disabled={isSubmitting}
                      />
                    )}
                  />
                  <Controller
                    name="numeroEmergencia"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Número de Emergencia"
                        fullWidth
                        required
                        error={!!errors.numeroEmergencia}
                        helperText={errors.numeroEmergencia?.message}
                        disabled={isSubmitting}
                      />
                    )}
                  />
                </Stack>
              </Stack>
            </Box>

            {/* Información Académica */}
            <Box>
              <Typography variant="h6" color="primary" gutterBottom>
                Información Académica
              </Typography>
              <Stack spacing={2}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Controller
                    name="materiaACargo"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Materia a Cargo"
                        fullWidth
                        required
                        error={!!errors.materiaACargo}
                        helperText={errors.materiaACargo?.message}
                        disabled={isSubmitting}
                      />
                    )}
                  />
                  <Controller
                    name="estado"
                    control={control}
                    render={({ field }) => (
                      <FormControl fullWidth required error={!!errors.estado}>
                        <InputLabel>Estado</InputLabel>
                        <Select
                          {...field}
                          label="Estado"
                          disabled={isSubmitting}
                        >
                          <MenuItem value={EstadoDocente.ACTIVO}>Activo</MenuItem>
                          <MenuItem value={EstadoDocente.INACTIVO}>Inactivo</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  />
                </Stack>
              </Stack>
            </Box>

            {/* Documentación */}
            <Box>
              <Typography variant="h6" color="primary" gutterBottom>
                Documentación
              </Typography>
              <Stack spacing={3}>
                <FileUpload
                  label="Horario (PDF)"
                  accept=".pdf"
                  maxSize={5 * 1024 * 1024}
                  currentFile={docente?.horario}
                  onFileChange={setHorarioFile}
                  disabled={isSubmitting}
                />

                <FileUpload
                  label="Resolución Toma de Posición (PDF)"
                  accept=".pdf"
                  maxSize={5 * 1024 * 1024}
                  currentFile={docente?.resolucionTomaPosicion}
                  onFileChange={setResolucionTomaPosicionFile}
                  disabled={isSubmitting}
                />

                <FileUpload
                  label="Resolución Designación (PDF)"
                  accept=".pdf"
                  maxSize={5 * 1024 * 1024}
                  currentFile={docente?.resolucionDesignacion}
                  onFileChange={setResolucionDesignacionFile}
                  disabled={isSubmitting}
                />
              </Stack>
            </Box>
          </Stack>
        </DialogContent>

        <DialogActions sx={{ p: 3 }}>
          <Button 
            onClick={handleClose} 
            disabled={isSubmitting}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting || loading}
            startIcon={isSubmitting && <CircularProgress size={20} />}
          >
            {isSubmitting ? 'Guardando...' : (docente ? 'Actualizar' : 'Crear')}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default DocenteForm;