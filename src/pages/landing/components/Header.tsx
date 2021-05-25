import { Button } from '@chakra-ui/button';
import { Flex, HStack, Link } from '@chakra-ui/layout';
import { FlexProps } from '@chakra-ui/react';
import { Logo } from 'src/components/Logo';

export const Header: React.FC<FlexProps> = (props) => {
  return (
    <Flex justifyContent="space-between" {...props}>
      <Logo />
      <HStack spacing={8}>
        <Link>About</Link>
        <Link>Pricing</Link>
        <Link>FAQs</Link>
        <Link>Contacts</Link>
      </HStack>
      <HStack spacing={10}>
        <Link>Login</Link>
        <Button colorScheme="cyan" textColor="white">
          Try for free
        </Button>
      </HStack>
    </Flex>
  );
};
