import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  IconButton,
  useClipboard,
  useToast,
} from '@chakra-ui/react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { Meeting } from '../hooks/useMeetingsQuery';
import * as _ from 'date-fns';
import { useMeQuery } from 'src/hooks/useMeQuery';
import { useEffect, useState } from 'react';
import { CheckIcon, CopyIcon } from '@chakra-ui/icons';
import { useStartMeetingMutation } from '../hooks/useStartMeetingMutation';
import { useHistory } from 'react-router-dom';

const RemainingTime = ({ startTime }: { startTime: string }) => (
  <Flex color="gray.400" mr="10px" alignItems="center">
    <Icon me={2} as={AiOutlineFieldTime} fontSize="2xl" />
    <Text>in {_.formatDistanceToNowStrict(new Date(startTime))}</Text>
  </Flex>
);

const baseUrl = 'https://app.edugaze.me';
type Props = Meeting;
export default function MeetingCard({
  course,
  startTime,
  endTime,
  _id,
  title,
  status,
}: Props) {
  const history = useHistory();
  const { start } = useStartMeetingMutation(_id, {
    onSuccess: () => {
      history.push(`/meeting/${_id}`);
    },
  });
  const [canStart, setCanStart] = useState(
    _.isAfter(new Date(), new Date(startTime))
  );
  const meetingLink = `${baseUrl}/meeting/${_id}`;
  const { hasCopied, onCopy: _onCopy, value } = useClipboard(meetingLink, {});
  const toast = useToast({
    status: 'success',
    description: `${value} is copied `,
  });
  const onCopy = () => {
    _onCopy();
    toast();
  };
  useEffect(() => {
    const clear = setInterval(() => {
      setCanStart(_.isAfter(new Date(), new Date(startTime)));
    }, 1000 * 60);
    return () => {
      clearInterval(clear);
    };
  }, [startTime]);

  const { data: me } = useMeQuery();
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

        <Flex alignItems="center">
          {me?.role === 'instructor' ? (
            <>
              <IconButton
                onClick={onCopy}
                variant="outline"
                me={4}
                colorScheme="teal"
                aria-label=""
                icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
              />
              {canStart ? (
                <Button
                  background="#56CAD8"
                  onClick={() => start()}
                  textColor="white"
                  borderRadius="10px"
                  _focus={{ border: 'none' }}
                >
                  Start NOW
                </Button>
              ) : (
                <RemainingTime startTime={startTime} />
              )}
            </>
          ) : (
            <RemainingTime startTime={startTime} />
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
