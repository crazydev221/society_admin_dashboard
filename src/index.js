import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import store from './redux/store';
import App from './App';

import './index.scss';
import './tailwind.css';

ReactDOM.render(
  <BrowserRouter forceRefresh>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
