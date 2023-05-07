import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppRoutes } from './routes/routes';

import { useAuth } from './hooks/useAuth';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <AppRoutes isLoggedIn={isAuthenticated} />
      <ToastContainer />
    </Router>
  );
};

export default App;
