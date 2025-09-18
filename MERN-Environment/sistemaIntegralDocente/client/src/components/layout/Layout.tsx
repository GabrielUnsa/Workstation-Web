import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { School, Person } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h6: {
      fontWeight: 600,
    },
  },
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="static" elevation={2}>
          <Toolbar>
            <School sx={{ mr: 2 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Sistema Integral Docente
            </Typography>
            <Person sx={{ mr: 1 }} />
            <Typography variant="body2">
              Gestión de Personal
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="xl" sx={{ mt: 4, mb: 4, flex: 1 }}>
          {children}
        </Container>

        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body2" color="text.secondary" align="center">
              © {new Date().getFullYear()} Sistema Integral Docente. Todos los derechos reservados.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;