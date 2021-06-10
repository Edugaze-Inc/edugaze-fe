import { ChakraProvider } from '@chakra-ui/react';
import SignIn from './pages/signIn/components/SignIn';
//import { Landing } from './pages/landing/Landing';
function App() {
  return (
    <ChakraProvider>
      <SignIn/>
    </ChakraProvider>
  );
}

export default App;
