import React from 'react';
import ReactDOM from 'react-dom/client';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Card from './components/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Card />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
