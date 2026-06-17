import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter basename="/Banking-web-application">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;