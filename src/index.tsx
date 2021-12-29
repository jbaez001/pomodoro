import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './Components/App';
import { reportWebVitals } from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme } from "./DefaultTheme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={defaultTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
