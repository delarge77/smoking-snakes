import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100%;
    background: #000000;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
  }
  
  body {
    background: #000000 !important;
    margin: 0;
    padding: 0;
  }
  
  #root {
    background: #000000;
    min-height: 100vh;
  }
`;

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
