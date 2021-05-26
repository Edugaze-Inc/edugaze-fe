import { Image } from '@chakra-ui/image';
import { BoxProps, Flex, Heading } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import landing5 from 'src/assets/landing5.svg';

export const Landing5: React.FC<BoxProps> = (props) => (
  <Flex justify="center" flexDir="column" height="100vh" {...props} pt="10">
    <Flex flexDir="column" align="center">
      <Image src={landing5} mb={10} />
      <Heading mb={10} fontSize="4xl">
        Start your first lecture{' '}
        <Heading display="inline" color="cyan.500">
          now
        </Heading>
      </Heading>
      <Button colorScheme="cyan" textColor="white">
        Try for free
      </Button>
    </Flex>
  </Flex>
);