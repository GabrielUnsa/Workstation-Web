import React from 'react';
import {
  Snackbar,
  Alert,
  AlertTitle,
} from '@mui/material';
import { useApp } from '../../context/AppContext';

const NotificationManager: React.FC = () => {
  const { error, setError, success, setSuccess } = useApp();

  const handleCloseError = () => {
    setError(null);
  };

  const handleCloseSuccess = () => {
    setSuccess(null);
  };

  return (
    <>
      {/* Snackbar para errores */}
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseError}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      </Snackbar>

      {/* Snackbar para mensajes de éxito */}
      <Snackbar
        open={!!success}
        autoHideDuration={4000}
        onClose={handleCloseSuccess}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSuccess}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          <AlertTitle>Éxito</AlertTitle>
          {success}
        </Alert>
      </Snackbar>
    </>
  );
};

export default NotificationManager;