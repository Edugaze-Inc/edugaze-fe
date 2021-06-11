import SignInHeader from './SignInHeader';
import SignInForm from './SignInForm';
import TopPart from './TopPart';
import { Stack, HStack, VStack } from "@chakra-ui/react";
import {
  Box,
  Flex,
} from '@chakra-ui/react'
const SignIn = () => {
    return (
        <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
      <Box 
        borderWidth={1}
        width='486px'
        Height='562px'
        borderRadius={10}
        textAlign='center'
        alignContent='center'
        boxShadow='lg'
      >
        <Box p={4} width='full'>
          <TopPart/>
          <SignInHeader />
          <SignInForm />
        </Box>
      </Box>
    </Flex>
    )
}
export default SignIn

