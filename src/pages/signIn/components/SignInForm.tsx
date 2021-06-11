import { Button } from '@chakra-ui/button';
import { Box } from "@chakra-ui/react"
import { Checkbox} from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import { Stack} from "@chakra-ui/react"
import {
  FormControl,
  FormLabel
} from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
const VARIANT_COLOR = 'teal'
const SignInForm = () => {
    return (
        <Box my={8} textAlign='left'>
        <form>
  
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' placeholder='Enter your email address' />
          </FormControl>
  
          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input type='password' placeholder='Enter your password' />
          </FormControl>
  
          <Stack isInline justifyContent='space-between' mt={4}>
              <Box>
                <Checkbox>Remember Me</Checkbox>
              </Box>
              <Box>
                <Link color={`${VARIANT_COLOR}.500`}>Forgot your password?</Link>
              </Box>
          </Stack>
  
          <Button variantColor={VARIANT_COLOR}  width='full' mt={4}>Sign In</Button>
        </form>
      </Box>
    )
}

export default SignInForm
