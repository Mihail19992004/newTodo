import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
// eslint-disable-next-line import/namespace
import { App } from './App';
import { theme } from './theme';
import './i18n';

try {
  ReactDOM.render(
      <ThemeProvider theme={ theme }>
        <Router>
            <App />
        </Router>
      </ThemeProvider>,
      document.getElementById('root'),
  );
} catch (error) {
  // eslint-disable-next-line no-console
  console.error('React render error: ', error);
}
