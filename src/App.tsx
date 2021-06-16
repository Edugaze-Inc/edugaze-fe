import { ChakraProvider } from '@chakra-ui/react';
import FullSignUpForm from './pages/signUp/components/FullSignUpForm';
import FullSignInForm from './pages/signIn/components/FullSignInForm';
//import { Landing } from './pages/landing/Landing';
function App() {
  return (
    <ChakraProvider>
      <FullSignUpForm/>
    </ChakraProvider>
  );
}

export default App;
