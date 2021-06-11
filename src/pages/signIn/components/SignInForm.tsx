import { Button } from '@chakra-ui/button';
import { Box } from "@chakra-ui/react"
import { Checkbox} from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import { Stack} from "@chakra-ui/react"
import { CheckIcon } from '@chakra-ui/icons';
import { IconButton } from "@chakra-ui/react";
import GmailIcon from 'src/assets/GmailIcon.svg';
import {
  FormControl,
  FormLabel
} from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
const VARIANT_COLOR = 'teal'
const SignInForm = () => {
    return (
        <Box my={8}  textAlign='center'>
        <form>
  
          <FormControl 
          width='full'
          borderRadius='4px'
          bgColor='#EFEFEF'
          borderColor='#31B3C2'
          >
            <Input type='email' placeholder='Email'/>
            
          </FormControl>
  
          <FormControl mt={4}
           width='full'
           borderRadius='4px'
           bgColor='#EFEFEF'
           borderColor='#31B3C2'
           >
            <Input type='password' placeholder='Password'/>
          </FormControl>
          <Button bgColor='#31B3C2' textColor='#FFFFFF' width='full' mt={4}>Sign In</Button>
        </form>
      </Box>
    )
}

export default SignInForm
