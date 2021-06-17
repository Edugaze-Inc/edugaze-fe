import { Button } from '@chakra-ui/button';
import { Box, InputRightElement } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import GmailIcon from 'src/assets/GmailIcon.svg';
import BottomOrPart from './BottomOrPart';
import BottomTextPart from './BottomTextPart';
import { Image } from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
const SignInForm = () => {
  return (
    <Box my={8} textAlign="center">
      <form>
        <FormControl
          width="full"
          borderRadius="4px"
          bgColor="#EFEFEF"
          borderColor="#31B3C2"
        >
          <Input type="email" placeholder="Email" />
          <InputRightElement width="3rem" height="3rem">
            <CheckIcon color="#31B3C2" />
          </InputRightElement>
        </FormControl>

        <FormControl
          mt={4}
          width="full"
          borderRadius="4px"
          bgColor="#EFEFEF"
          borderColor="#31B3C2"
        >
          <Input type="password" placeholder="Password" />
          <InputRightElement width="3rem" height="3rem">
            <CheckIcon color="#31B3C2" />
          </InputRightElement>
        </FormControl>
        <Button
          bgColor="#31B3C2"
          textColor="#FFFFFF"
          width="full"
          mt={4}
          marginBottom="5px"
        >
          Sign In
        </Button>
        <BottomOrPart></BottomOrPart>
        <Button
          leftIcon={
            <Image
              px={[16, 16, 'unset']}
              mb={[16, 16, 'unset']}
              src={GmailIcon}
              objectFit="cover"
            />
          }
          bgColor="#31B3C2"
          textColor="#FFFFFF"
          width="full"
          mt={4}
        >
          Sign Up with Google
        </Button>
        <BottomTextPart />
      </form>
    </Box>
  );
};

export default SignInForm;
