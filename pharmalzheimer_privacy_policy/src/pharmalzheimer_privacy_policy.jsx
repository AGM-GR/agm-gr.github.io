import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap-icons/font/bootstrap-icons.css";

import "../../src/main.css";

import React from 'react'
import ReactDOM from 'react-dom/client'
import PharmAlzheimer from './PharmAlzheimer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PharmAlzheimer />
  </React.StrictMode>,
)
