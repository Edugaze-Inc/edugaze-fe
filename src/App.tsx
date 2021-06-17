import { ChakraProvider } from '@chakra-ui/react';
import { MainRouter } from 'src/components/Router';

function App() {
  return (
    <ChakraProvider>
      <MainRouter />
    </ChakraProvider>
  );
}

export default App;
