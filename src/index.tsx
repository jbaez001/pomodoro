
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { App } from './Components/App';
import { defaultTheme } from "./DefaultTheme";
import { reportWebVitals } from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={defaultTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
