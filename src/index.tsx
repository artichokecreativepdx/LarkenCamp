import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './css/normalize.css';
import './css/skeleton.css';
import './css/main.css';
import App from './App';

const element = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
const container = document.getElementById('root');
ReactDOM.render(element, container);
