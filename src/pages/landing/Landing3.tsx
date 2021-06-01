import { Image } from '@chakra-ui/image';
import { Box, BoxProps, Flex, Text } from '@chakra-ui/layout';
import landing3 from 'src/assets/landing3.svg';

export const Landing3: React.FC<BoxProps> = (props) => (
  <Flex justify="center" flexDir="column" minH="100vh" {...props} pt="10">
    <Flex
      justify="space-around"
      align="center"
      flexDirection={['column', 'column', 'row']}
    >
      <Image px={[16, 16, 'unset']} src={landing3} mb={[10, 10, 'unset']} />

      <Box textAlign={['center', 'center', 'unset']}>
        <Text fontWeight="bold" fontSize="4xl" mb="4" color="cyan.500">
          Students Privacy
        </Text>
        <Text fontSize="2xl" maxW="360px">
          Keep your students emotions anonymous and their data secure. No image
          leaves their devices.
        </Text>
      </Box>
    </Flex>
  </Flex>
);
