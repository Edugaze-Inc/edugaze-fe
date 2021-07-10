import { Button } from '@chakra-ui/button';
import { Flex, HStack, Link } from '@chakra-ui/layout';
import { FlexProps } from '@chakra-ui/react';
import { Logo } from 'src/components/Logo';

import { Link as RouterLink } from 'react-router-dom';

export const Header: React.FC<FlexProps> = (props) => {
  return (
    <Flex justifyContent="space-between" {...props}>
      <Logo />
      <HStack spacing={8} display={['none', 'none', 'flex']}>
        <Link>About</Link>
        <Link>Pricing</Link>
        <Link>FAQs</Link>
        <Link>Contacts</Link>
      </HStack>
      <HStack spacing={10}>
        <Link as={RouterLink} to="/login">
          Login
        </Link>
        <RouterLink to="/signup">
          <Button colorScheme="cyan" textColor="white">
            Try for free
          </Button>
        </RouterLink>
      </HStack>
    </Flex>
  );
};
