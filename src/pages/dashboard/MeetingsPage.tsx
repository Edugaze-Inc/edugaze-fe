import {
  Flex,
  Button,
  Image,
  Text,
  useDisclosure,
  Spinner,
} from '@chakra-ui/react';
import noMeetingsIcon from 'src/assets/no_meeting_img.svg';
import MeetingCard from './components/MeetingCard';
import { useMeetingsQuery } from './hooks/useMeetingsQuery';

import { NewMeetingModal } from './NewMeetingModal';

const EmptyList = () => (
  <Flex flexDir="column" alignItems="center">
    <Image src={noMeetingsIcon}></Image>
    <Text fontSize="24px" fontWeight="bold">
      No live meetings at the moment!
    </Text>
  </Flex>
);

export default function Homepage() {
  const meetingsQuery = useMeetingsQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex overflow="auto" w="100%" flexDir="column">
      <Flex flexDir="row-reverse" mr={50} mt={50}>
        <Button
          background="#56CAD8"
          textColor="white"
          borderRadius="10px"
          _focus={{ border: 'none' }}
          onClick={onOpen}
        >
          New Meeting
        </Button>
        <NewMeetingModal isOpen={isOpen} onClose={onClose} />
      </Flex>

      {/* meetings do exist */}
      <Flex flexDir="column" alignItems="center" justifyContent="space-between">
        <Text fontSize="22px" fontWeight="light" color="#898989" mb="20px">
          Today
        </Text>

        {meetingsQuery.isLoading || meetingsQuery.isIdle ? (
          <Spinner />
        ) : meetingsQuery.isError ? (
          <Text>
            An Error Occured!{' '}
            {process.env.NODE_ENV === 'development' &&
              meetingsQuery.error.response?.data}
          </Text>
        ) : meetingsQuery.data.length === 0 ? (
          <EmptyList />
        ) : (
          meetingsQuery.data.map((meeting) => (
            <MeetingCard key={meeting._id} {...meeting} />
          ))
        )}
        {/* <MeetingCard
          courseName="Computer Networks - CSE431"
          startTime="08:00 AM"
          endTime="10:00 AM"
          active
        />
        <MeetingCard
          courseName="Software Quality Assurance - CSE434"
          startTime="08:00 AM"
          endTime="10:00 AM"
        />
        <MeetingCard
          courseName="Agile - CS325"
          startTime="08:00 AM"
          endTime="10:00 AM"
        />

        <Text fontSize="22px" fontWeight="light" color="#898989" mb="20px">
          May 19
        </Text> 
        <MeetingCard
          courseName="Software Maintenance - CSE426"
          startTime="09:00 AM"
          endTime="11:00 AM"
        />
        <MeetingCard
          courseName="Ontologies - CSE486"
          startTime="12:00 PM"
          endTime="02:00 PM"
        /> */}
      </Flex>
    </Flex>
  );
}
