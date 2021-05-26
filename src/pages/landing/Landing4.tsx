import { Image } from '@chakra-ui/image';
import { Box, BoxProps, Flex, Text } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';
import landing4 from 'src/assets/landing4.svg';

export const Landing4: React.FC<BoxProps> = (props) => (
  <Flex justify="center" flexDir="column" height="100vh" {...props} pt="10">
    <Flex
      bottom="0"
      justify="space-around"
      align="center"
      mb="4"
      flexDirection={['column-reverse', 'column-reverse', 'row']}
    >
      <Box textAlign={['center', 'center', 'unset']}>
        <Box display="flex" alignItems="baseline">
          <Text fontWeight="bold" fontSize="4xl" color="cyan.500" me={2}>
            Interactive Polls
          </Text>
          <Box>
            <Tag colorScheme="green">Comming soon</Tag>
          </Box>
        </Box>
        <Text fontSize="2xl" maxW="360px">
          Engage your class with interactive polls, quizzes and questions.
        </Text>
      </Box>
      <Image src={landing4} mb={[16, 16, 'unset']} />
    </Flex>
  </Flex>
);
