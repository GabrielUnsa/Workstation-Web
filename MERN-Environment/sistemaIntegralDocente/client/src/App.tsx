import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/layout/Layout';
import NotificationManager from './components/common/NotificationManager';
import DocentesPage from './pages/DocentesPage';

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<DocentesPage />} />
            <Route path="/docentes" element={<DocentesPage />} />
          </Routes>
          <NotificationManager />
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;
