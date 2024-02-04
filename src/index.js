import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { GlobalStyles } from 'GlobalStyle';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../src/redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/baby-nanny">
      <Provider store={store}>
        <App />
        <GlobalStyles />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
