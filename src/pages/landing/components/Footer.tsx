import { Center, Flex, HStack, Link, Text, VStack } from '@chakra-ui/layout';
import { Logo } from 'src/components';

export const Footer = () => (
  <Flex
    height={['unset', 'unset', '224px']}
    py={['6', '6']}
    bgColor="gray.200"
    mx={['-4', '-4', '-20']}
    px={['4', '4', '20']}
    justify="space-between"
  >
    <Center flexDir={['row', 'row', 'column']}>
      <Logo mb={['unset', 'unset', '10']} me={[10, 10, 'unset']} />
      <Text>©2021 Edugaze</Text>
    </Center>
    <HStack spacing={10} display={['none', 'none', 'flex']}>
      <VStack spacing={5}>
        <Link>Products</Link>
        <Link>About</Link>
        <Link>Pricing</Link>
      </VStack>
      <VStack spacing={5}>
        <Link>Help & Support</Link>
        <Link>FAQs</Link>
        <Link>Contact Us</Link>
      </VStack>
    </HStack>
  </Flex>
);
