import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { BrowserRouter as Router } from 'react-router-dom';
// eslint-disable-next-line import/namespace
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,

  document.getElementById('root'),
);

