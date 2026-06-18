import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

/**
 * App root — wraps the entire application with:
 *   1. BrowserRouter  — client-side routing
 *   2. AuthProvider   — authentication state management
 */
function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;