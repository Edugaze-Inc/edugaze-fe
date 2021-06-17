import SignUpHeader from './SignUpHeader';
import SignUpForm from './SignUpForm';
import TopPart from './TopPart';
import { Box, Flex } from '@chakra-ui/react';
const SignUp = () => {
  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box
        borderWidth={1}
        bgColor="#FFFFFF"
        width="486px"
        Height="562px"
        borderRadius={10}
        textAlign="center"
        alignContent="center"
        boxShadow="lg"
      >
        <Box p={4} width="full">
          <TopPart />
          <SignUpHeader />
          <SignUpForm />
        </Box>
      </Box>
    </Flex>
  );
};
export default SignUp;
