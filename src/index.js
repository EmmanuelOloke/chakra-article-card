import React from 'react';
import ReactDOM from 'react-dom/client';
import { Box, ChakraProvider } from '@chakra-ui/react';
import ArticleCard from './components/ArticleCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <ArticleCard />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
