import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MainRouter } from './Router';

export const queryClient = new QueryClient();
function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <MainRouter />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
