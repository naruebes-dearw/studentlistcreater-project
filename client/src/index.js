import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import Debug from './Debug';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Debug />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);