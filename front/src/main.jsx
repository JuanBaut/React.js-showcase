import React from 'react';
import App from './App.jsx';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import theme from './theme.js';
import { ThemeProvider } from '@mui/material';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);
