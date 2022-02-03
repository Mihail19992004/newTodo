import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
// eslint-disable-next-line import/namespace
import { App } from './App';
import { theme } from './theme';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
