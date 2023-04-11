import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';

import { App } from 'components/App/App';

import './index.css';

const theme = {
  colors: {
    dark: '#041d51',
    grey: '#313131',
    white: 'white',
    accent: '#739ceda4',
    noActive: '#b3c4e6a3',
    shadow: '1px 2px 2px rgb(0 0 0 / 0.5)',
    shadowAccent: '2px 5px 2px rgb(0 0 0 / 0.5)',
  },
};

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="goit-react-hw-05-movies">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
