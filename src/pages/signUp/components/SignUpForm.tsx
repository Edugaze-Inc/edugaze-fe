import { Button } from '@chakra-ui/button';
import { Box, Icon, InputRightElement, Stack } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import BottomOrPart from './BottomOrPart';
import { Image } from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import { useState } from 'react';
import BottomTextPart from './BottomTextPart';
import { Radio, RadioGroup } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
///////////////////////////////////////////////////////////////////

export type Role = 'instructor' | 'student';
const SignUpForm = () => {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'' | Role>('');
  const [username, setUsername] = useState('');

  let re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isInvalid =
    password === '' ||
    email === '' ||
    !re.test(email) ||
    role === '' ||
    username === '';
  const isInvalidEmail = email === '' || !re.test(email);
  const isInvalidPassword = password === '';

  const handleSignIn = (event: any) => {
    event.preventDefault();
    alert(`Email: ${email} & Password: ${password}`);
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
          mb={4}
          borderRadius="4px"
          bgColor="#EFEFEF"
          borderColor="#31B3C2"
        >
          <Input
            type="username"
            placeholder="Username"
            value={username}
            rule={{ required: true }}
            onChange={(event) => setUsername(event.currentTarget.value)}
          />
          <InputRightElement width="3rem" height="3rem">
            {em}
          </InputRightElement>
        </FormControl>

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
          mb={4}
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

        <RadioGroup onChange={setRole as (val: string) => void}>
          <Stack direction="row" flex="1" justifyContent="center">
            <Radio value="instructor">Instructor</Radio>
            <Radio value="student">Student</Radio>
          </Stack>
        </RadioGroup>
        <Button
          type="submit"
          isDisabled={isInvalid}
          bgColor="#31B3C2"
          textColor="#FFFFFF"
          width="full"
          mt={4}
          marginBottom="5px"
        >
          Sign Up
        </Button>
        <BottomOrPart></BottomOrPart>
        <Button
          bgColor="#31B3C2"
          textColor="#FFFFFF"
          width="full"
          mt={4}
          onClick={() => {
            toast({
              description: 'Upcoming feature',
              status: 'info',
              duration: 2000,
            });
          }}
          // textAlign="center"
        >
          Sign Up with Google
        </Button>
        <BottomTextPart />
      </form>
    </Box>
  );
};

export default SignUpForm;
