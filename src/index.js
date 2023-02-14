import React from 'react';
import ReactDOM from 'react-dom/client';
import { Features } from './Components/Features';
import { Application } from './Components/Application';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Features/>
    <Application/>
  </React.StrictMode>
);

