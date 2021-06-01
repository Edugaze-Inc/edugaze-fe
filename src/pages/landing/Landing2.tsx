import { Image } from '@chakra-ui/image';
import { Box, BoxProps, Flex, Text } from '@chakra-ui/layout';
import landing2 from 'src/assets/landing2.svg';

export const Landing2: React.FC<BoxProps> = (props) => (
  <Box minH="100vh" {...props} pt="10">
    <Text fontWeight="semibold" fontSize="4xl" mb="7" textAlign="center">
      Transform your distance learning
    </Text>
    <Text textAlign="center" mb="16" fontSize="xl">
      Interactive Private Effecient lectures
    </Text>
    <Flex
      justify="space-around"
      flexDirection={['column-reverse', 'column-reverse', 'row']}
    >
      <Box textAlign={['center', 'center', 'unset']}>
        <Text
          fontWeight="bold"
          fontSize="4xl"
          mb="4"
          color="cyan.500"
          pt={[16, 16, 'unset']}
        >
          Emotion Detection
        </Text>
        <Text fontSize="2xl" maxW={['unset', 'unset', '360px']}>
          Observe real-time statistics of students emotins during the lecture.
        </Text>
      </Box>
      <Image px={[16, 16, 'unset']} src={landing2} />
    </Flex>
  </Box>
);
