import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, BoxProps, Flex, Text } from '@chakra-ui/layout';
import landing1 from 'src/assets/landing1.svg';

export const Landing1: React.FC<BoxProps> = (props) => (
  <Box height={'calc(100vh - 88px)'} pt="130px" {...props}>
    <Flex
      justify="space-between"
      flexDirection={['column-reverse', 'column-reverse', 'row']}
    >
      <Box>
        <Text paddingTop={24} fontWeight="bold" fontSize="4xl" mb="10">
          Make your online lectures <Text color="cyan.500">smarter</Text>
        </Text>
        <Text fontSize="2xl" mb={10} maxW="360px">
          Real-time emotion detection, interactive polls and much more! All in
          one place
        </Text>
        <Button colorScheme="cyan" textColor="white">
          Try for free
        </Button>
      </Box>
      <Image src={landing1} />
    </Flex>
  </Box>
);
