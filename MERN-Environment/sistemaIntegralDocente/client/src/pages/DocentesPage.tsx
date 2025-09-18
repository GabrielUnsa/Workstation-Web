import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Chip,
  IconButton,
  Tooltip,
  CircularProgress,
  Alert,
} from '@mui/material';
import {
  Add as AddIcon,
  Search as SearchIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Download as DownloadIcon,
  Visibility as ViewIcon,
} from '@mui/icons-material';
import { useDocentes } from '../hooks/useDocentes';
import { useApp } from '../context/AppContext';
import { formatDate, getEstadoColor, getEstadoText } from '../utils/helpers';
import { IDocente, ICreateDocenteRequest, IUpdateDocenteRequest } from '../types/docente.types';
import DocenteForm from '../components/docentes/DocenteForm';

const DocentesPage: React.FC = () => {
  const {
    docentes,
    createDocente,
    updateDocente,
    deleteDocente,
    toggleDocenteStatus,
  } = useDocentes();

  const { loading, error } = useApp();

  const [showForm, setShowForm] = useState(false);
  const [editingDocente, setEditingDocente] = useState<IDocente | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Filtrar docentes por término de búsqueda
  const filteredDocentes = docentes.filter((docente) =>
    docente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    docente.apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
    docente.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    docente.dni.includes(searchTerm) ||
    docente.materiaACargo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginación
  const paginatedDocentes = filteredDocentes.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleNewDocente = () => {
    setEditingDocente(null);
    setShowForm(true);
  };

  const handleEditDocente = (docente: IDocente) => {
    setEditingDocente(docente);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingDocente(null);
  };

  const handleSubmitForm = async (formData: FormData) => {
    try {
      // Convertir FormData a objeto
      const data: any = {};
      formData.forEach((value, key) => {
        if (key === 'horario' || key === 'resolucionTomaPosicion' || key === 'resolucionDesignacion') {
          // Estos son archivos, se manejan por separado
          return;
        }
        data[key] = value;
      });

      if (editingDocente) {
        await updateDocente(editingDocente.id!, data as IUpdateDocenteRequest);
      } else {
        await createDocente(data as ICreateDocenteRequest);
      }
      setShowForm(false);
      setEditingDocente(null);
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      throw error;
    }
  };

  const handleToggleStatus = async (id: string) => {
    try {
      await toggleDocenteStatus(id);
    } catch (error) {
      console.error('Error al cambiar estado:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('¿Está seguro de que desea eliminar este docente?')) {
      try {
        await deleteDocente(id);
      } catch (error) {
        console.error('Error al eliminar docente:', error);
      }
    }
  };

  const handleDownloadDocument = (url: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
  };

  if (loading && docentes.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight={400}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          Gestión de Docentes
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleNewDocente}
          size="large"
        >
          Nuevo Docente
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* Barra de búsqueda */}
      <Box mb={3}>
        <TextField
          fullWidth
          placeholder="Buscar por nombre, apellido, email, DNI o materia..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ maxWidth: 500 }}
        />
      </Box>

      {/* Tabla de docentes */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>DNI</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Materia</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Fecha Creación</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedDocentes.map((docente) => (
              <TableRow key={docente.id} hover>
                <TableCell>
                  <Box>
                    <Typography variant="body2" fontWeight="medium">
                      {`${docente.apellido}, ${docente.nombre}`}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Legajo: {docente.numeroLegajo}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{docente.email}</TableCell>
                <TableCell>{docente.dni}</TableCell>
                <TableCell>{docente.telefono}</TableCell>
                <TableCell>{docente.materiaACargo}</TableCell>
                <TableCell>
                  <Chip
                    label={getEstadoText(docente.estado)}
                    color={getEstadoColor(docente.estado)}
                    size="small"
                    onClick={() => handleToggleStatus(docente.id!)}
                    sx={{ cursor: 'pointer' }}
                  />
                </TableCell>
                <TableCell>
                  {docente.fechaCreacion ? formatDate(docente.fechaCreacion) : '-'}
                </TableCell>
                <TableCell align="center">
                  <Box display="flex" gap={1} justifyContent="center">
                    <Tooltip title="Ver detalles">
                      <IconButton size="small" color="primary">
                        <ViewIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Editar">
                      <IconButton 
                        size="small" 
                        color="primary"
                        onClick={() => handleEditDocente(docente)}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    {docente.horario && (
                      <Tooltip title="Descargar Horario">
                        <IconButton 
                          size="small" 
                          color="secondary"
                          onClick={() => handleDownloadDocument(docente.horario!, 'horario.pdf')}
                        >
                          <DownloadIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                    <Tooltip title="Eliminar">
                      <IconButton 
                        size="small" 
                        color="error"
                        onClick={() => handleDelete(docente.id!)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
            {paginatedDocentes.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  <Typography variant="body2" color="text.secondary" py={3}>
                    {searchTerm ? 'No se encontraron docentes con ese término de búsqueda' : 'No hay docentes registrados'}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredDocentes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Filas por página:"
          labelDisplayedRows={({ from, to, count }) => 
            `${from}-${to} de ${count !== -1 ? count : `más de ${to}`}`
          }
        />
      </TableContainer>

      {/* Formulario de docente */}
      <DocenteForm
        open={showForm}
        onClose={handleCloseForm}
        onSubmit={handleSubmitForm}
        docente={editingDocente}
        loading={loading}
      />
    </Box>
  );
};

export default DocentesPage;