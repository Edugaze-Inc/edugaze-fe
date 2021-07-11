import { ChakraProvider } from '@chakra-ui/react';
import { MainRouter } from './Router';
import { UseEmotionDetector } from './hooks/useEmotionDetector';
function App() {
  return (
    <ChakraProvider>
      <UseEmotionDetector />
    </ChakraProvider>
  );
}

export default App;
