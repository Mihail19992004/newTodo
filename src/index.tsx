import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';

import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,

  document.getElementById('root'),
);

