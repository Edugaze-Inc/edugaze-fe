import { Divider } from '@chakra-ui/react';
import { Flex, Text } from '@chakra-ui/layout';

const BottomOrPart = () => {
  return (
    <Flex flexDir="row" alignItems="center" marginTop="5px" flex={1}>
      <Flex flex="1">
        <Divider />
      </Flex>
      <Text marginX={4}>or</Text>
      <Flex flex="1">
        <Divider />
      </Flex>
    </Flex>
  );
};

export default BottomOrPart;
