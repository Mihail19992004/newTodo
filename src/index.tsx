import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';

import './i18n';

try {
  ReactDOM.render(
        <Router>
            <App />
        </Router>,
        document.getElementById('root'),
  );
} catch (error) {
  // eslint-disable-next-line no-console
  console.error('React render error: ', error);
}

