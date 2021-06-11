import SignInHeader from './SignInHeader';
import SignInForm from './SignInForm';
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  Box,
  BoxProps,
  Flex,
  IconButton,
  useColorMode,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button
} from '@chakra-ui/react'
const SignIn = () => {
    return (
        <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
      <Box 
        borderWidth={1}
        px={4}
        width='full'
        maxWidth='500px'
        borderRadius={4}
        textAlign='center'
        boxShadow='lg'
      >
        <Box p={4}>
          <SignInHeader />
          <SignInForm />
        </Box>
      </Box>
    </Flex>
    )
}
export default SignIn

