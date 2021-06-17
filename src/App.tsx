import { ChakraProvider } from '@chakra-ui/react';
import FullSignUpForm from './pages/signUp/components/FullSignUpForm';
import FullSignInForm from './pages/signIn/components/FullSignInForm';
import { Landing } from './pages/landing/Landing';
import {MainRouter} from 'src/components/Router'

function App() {
  return (
    <ChakraProvider>
      <MainRouter/>
    </ChakraProvider>
  );
}

export default App;
