import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  Button,
  Icon,
} from '@chakra-ui/react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { Meeting } from '../hooks/useMeetingsQuery';
import * as _ from 'date-fns';

type Props = { active?: boolean } & Meeting;
export default function MeetingCard({
  course,
  startTime,
  endTime,
  title,
  active,
}: Props) {

  function showStartMeeting() {
    if (new Date().getTime() >= new Date(startTime).getTime()) {
      active=true
    }
  }
  showStartMeeting();
  return (
    
    <Box
      w="90%"
      h="110px"
      rounded="10px"
      backgroundColor="white"
      boxShadow="sm"
      p={4}
      mb="20px"
    >
      <Flex flexDir="row" justifyContent="space-between" h="100%" w="100%">
        <Flex flexDir="column" justifyContent="center">
          <Heading size="md" mb="15px">
            {title} - {course}
          </Heading>
          <Heading size="sm" color="gray.500">
            {_.format(new Date(startTime), 'h:mm aaa')} -{' '}
            {_.format(new Date(endTime), 'h:mm aaa')}{' '}
          </Heading>
        </Flex>

        <Flex display={active ? 'flex' : 'none'}>
          <HStack spacing={8}>
            <Link>
              <Text color="#56CAD8" as="u">
                Share Meeting
              </Text>
            </Link>
            <Button
              background="#56CAD8"
              textColor="white"
              borderRadius="10px"
              _focus={{ border: 'none' }}
            >
              Start NOW
            </Button>
          </HStack>
        </Flex>

        <Flex
          display={active ? 'none' : 'active'}
          color="gray.400"
          mt="25px"
          mr="10px"
        >
          <HStack spacing={2}>
            <Icon as={AiOutlineFieldTime} fontSize="2xl" />
            <Text>in {_.formatDistanceToNowStrict(new Date(startTime))}</Text>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}
