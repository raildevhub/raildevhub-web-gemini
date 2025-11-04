
import React from 'react';
import ReactDOM from 'react-dom/client';
// Fix: Corrected import path to be explicit. This error is resolved by creating App.tsx as a module.
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);