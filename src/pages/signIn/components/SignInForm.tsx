import { Button } from '@chakra-ui/button';
import { Box, Icon, InputRightElement, InputLeftElement } from "@chakra-ui/react"
import { Checkbox} from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import { Stack} from "@chakra-ui/react"
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { IconButton } from "@chakra-ui/react";
import GmailIcon from 'src/assets/GmailIcon.svg';
import BottomOrPart from './BottomOrPart';
import { Image } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel
} from "@chakra-ui/react"
import { useForm } from 'react-hook-form'
import React, { useState } from 'react';
import { Link } from "@chakra-ui/react"
import BottomTextPart from './BottomTextPart';
///////////////////////////////////////////////////////////////////

type Profile = {
  email: string
  password: string
}

const VARIANT_COLOR = 'teal'
const SignInForm = () => {
  const {register, handleSubmit} = useForm<Profile>()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isInvalid = (password === '' || email === ''|| !(re.test(email))); 
  const isInvalidEmail= (email === ''|| !(re.test(email)));
  const isInvalidPassword= (password === '');
  const onSubmit = (data: Profile) => {
    console.log("data", data);
  };
  const handleSignIn = (event:any) =>{
    event.preventDefault();
    alert(`Email: ${email} & Password: ${password}`);

  }

  return (
        <Box my={8}  textAlign='center'>
        <form method="POST" onSubmit={handleSignIn}> 
  
          <FormControl 
          width='full'
          borderRadius='4px'
          bgColor='#EFEFEF'
          borderColor='#31B3C2'
          >
            <Input type='email' 
            placeholder='Email'value={email}
            rule={{ required: true }}
            onChange={event => setEmail(event.currentTarget.value)}
            />
            <InputRightElement width="3rem" height="3rem">
            <Icon as={isInvalidEmail? CloseIcon: CheckIcon} color={isInvalidEmail?'#ff0000':'#31B3C2'}/>
              </InputRightElement>
            
          </FormControl>
  
          <FormControl mt={4}
           width='full'
           borderRadius='4px'
           bgColor='#EFEFEF'
           borderColor='#31B3C2'
           >
            <Input type='password' placeholder='Password' value={password}
            rule={{ required: true }}
            onChange={event => setPassword(event.currentTarget.value)}
            />
            <InputRightElement width="3rem" height="3rem">
              <Icon as={isInvalidPassword? CloseIcon: CheckIcon} color={isInvalidPassword?'#ff0000':'#31B3C2'}/>
              </InputRightElement>
          </FormControl>
          <Button type="submit" isDisabled={isInvalid} bgColor='#31B3C2' textColor='#FFFFFF' width='full' mt={4} marginBottom="5px">Sign In</Button>
          <BottomOrPart></BottomOrPart>
          <Button leftIcon={<Image px={[16, 16, 'unset']} mb={[16, 16, 'unset']} src={GmailIcon} objectFit="cover"/>} bgColor='#31B3C2' textColor='#FFFFFF' width='full' mt={4}>Sign Up with Google</Button>
          <BottomTextPart/>
        </form>
      </Box>
    )
}

export default SignInForm
