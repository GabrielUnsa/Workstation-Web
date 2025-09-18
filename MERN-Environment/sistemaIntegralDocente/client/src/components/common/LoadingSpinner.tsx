import React from 'react';
import {
  Box,
  CircularProgress,
  Typography,
  Backdrop,
} from '@mui/material';

interface LoadingSpinnerProps {
  loading: boolean;
  message?: string;
  backdrop?: boolean;
  size?: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  loading,
  message = 'Cargando...',
  backdrop = false,
  size = 40,
}) => {
  if (!loading) return null;

  const spinner = (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={2}
    >
      <CircularProgress size={size} />
      {message && (
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      )}
    </Box>
  );

  if (backdrop) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        {spinner}
      </Backdrop>
    );
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight={200}
    >
      {spinner}
    </Box>
  );
};

export default LoadingSpinner;