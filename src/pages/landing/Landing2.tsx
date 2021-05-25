import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, BoxProps, Flex, Text } from '@chakra-ui/layout';
import landing2 from 'src/assets/landing2.svg';

export const Landing2: React.FC<BoxProps> = (props) => (
  <Box height="100vh" {...props} pt="10">
    <Text fontWeight="semibold" fontSize="4xl" mb="7" textAlign="center">
      Transform your distance learning
    </Text>
    <Text textAlign="center" mb="32" fontSize="xl">
      Interactive Private Effecient lectures
    </Text>
    <Flex
      justify="space-around"
      flexDirection={['column-reverse', 'column-reverse', 'row']}
    >
      <Box>
        <Text fontWeight="bold" fontSize="4xl" mb="4" color="cyan.500">
          Emotion Detection
        </Text>
        <Text fontSize="2xl" maxW="360px">
          Observe real-time statistics of students emotins during the lecture.
        </Text>
      </Box>
      <Image src={landing2} />
    </Flex>
  </Box>
);
