import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // No olvidar que estte StrictMode es muy útil para probar, ya que renderiza dos veces el componente.
  // Y no olvidar que estas dos renderizaciones solo se dan en desarrollo.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
