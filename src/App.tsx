import { ChakraProvider } from '@chakra-ui/react';
import { Landing } from './pages/landing/Landing';

function App() {
  return (
    <ChakraProvider>
      <Landing />
    </ChakraProvider>
  );
}

export default App;
