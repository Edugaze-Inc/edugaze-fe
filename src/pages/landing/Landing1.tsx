import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, BoxProps, Flex, Heading, Text } from '@chakra-ui/layout';
import landing1 from 'src/assets/landing1.svg';

export const Landing1: React.FC<BoxProps> = (props) => (
  <Box minHeight={'calc(100vh - 88px)'} pt={[10, 10, '130px']} {...props}>
    <Flex
      justify="space-between"
      flexDirection={['column-reverse', 'column-reverse', 'row']}
    >
      <Box>
        <Heading
          paddingTop={24}
          textAlign={['center', 'center', 'unset']}
          fontWeight="bold"
          fontSize="4xl"
          mb="10"
        >
          Make your online lectures <Text color="cyan.500">smarter</Text>
        </Heading>
        <Text
          fontSize="2xl"
          mb={10}
          maxW={['unset', 'unset', '360px']}
          textAlign={['center', 'center', 'unset']}
        >
          Real-time emotion detection, interactive polls and much more! All in
          one place
        </Text>
        <Button
          colorScheme="cyan"
          width={['100%', '100%', 'unset']}
          textColor="white"
        >
          Try for free
        </Button>
      </Box>
      <Image src={landing1} px={[16, 16, 'unset']} />
    </Flex>
  </Box>
);
