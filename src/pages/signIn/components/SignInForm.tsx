import { Button } from '@chakra-ui/button';
import { Box, Icon, InputRightElement } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import BottomOrPart from './BottomOrPart';
import { Image } from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import { useState } from 'react';
import BottomTextPart from './BottomTextPart';
import { useToast } from '@chakra-ui/react';
import { useSignInMutation } from '../useSignInMutation';
///////////////////////////////////////////////////////////////////

const SignInForm = () => {
  const toast = useToast();
  const { signIn, isLoading } = useSignInMutation({
    onSuccess: () => {
      toast({ status: 'success', description: 'Signed in successfully!' });
    },
    onError: (error: any) => {
      toast({ status: 'error', description: error?.response?.data });
    },
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isInvalid = password === '' || email === '' || !re.test(email);
  const isInvalidEmail = email === '' || !re.test(email);
  const isInvalidPassword = password === '';

  const handleSignIn = (event: any) => {
    event.preventDefault();
    signIn({ email, password });
  };
  let pass;
  let em;
  if (!isInvalidEmail) {
    em = <Icon as={CheckIcon} color="#31B3C2" />;
  } else {
    em = <Image id="myImage" src="//:0" />;
  }
  if (!isInvalidPassword) {
    pass = <Icon as={CheckIcon} color="#31B3C2" />;
  } else {
    pass = <Image id="myImage" src="//:0" />;
  }

  return (
    <Box my={8} textAlign="center" bgColor="#FFFFFF">
      <form method="POST" onSubmit={handleSignIn}>
        <FormControl
          width="full"
          borderRadius="4px"
          bgColor="#EFEFEF"
          borderColor="#31B3C2"
        >
          <Input
            type="email"
            placeholder="Email"
            value={email}
            rule={{ required: true }}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          <InputRightElement width="3rem" height="3rem">
            {em}
          </InputRightElement>
        </FormControl>

        <FormControl
          mt={4}
          width="full"
          borderRadius="4px"
          bgColor="#EFEFEF"
          borderColor="#31B3C2"
        >
          <Input
            type="password"
            placeholder="Password"
            value={password}
            rule={{ required: true }}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          <InputRightElement width="3rem" height="3rem">
            {pass}
          </InputRightElement>
        </FormControl>
        <Button
          type="submit"
          isDisabled={isInvalid}
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
          onClick={() => {
            toast({
              description: 'Upcoming feature',
              status: 'info',
              duration: 2000,
            });
          }}
          bgColor="#31B3C2"
          textColor="#FFFFFF"
          width="full"
          isLoading={isLoading}
          mt={4}
        >
          Sign In with Google
        </Button>
        <BottomTextPart />
      </form>
    </Box>
  );
};

export default SignInForm;
