import { Center, Flex, HStack, Link, Text, VStack } from '@chakra-ui/layout';
import { Logo } from 'src/components';

export const Footer = () => (
  <Flex
    height="224px"
    bgColor="gray.200"
    mx="-20"
    px="20"
    justify="space-between"
  >
    <Center flexDir="column">
      <Logo mb="10" />
      <Text>©2021 Edugaze</Text>
    </Center>
    <HStack spacing={10}>
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
