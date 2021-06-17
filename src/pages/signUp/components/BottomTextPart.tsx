import { HStack, Link } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const BottomTextPart = () => {
  return (
    <Box textAlign="center" marginTop="5px" marginLeft="100px">
      <HStack direction={['column', 'row']}>
        <text>Already have an account?</text>
        <Link as={RouterLink} color="blue" to="/login">
          Sign In?
        </Link>
      </HStack>
    </Box>
  );
};

export default BottomTextPart;
