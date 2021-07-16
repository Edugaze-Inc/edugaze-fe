import { Center } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useMeeting } from './useMeeting';

export const Meeting = () => {
  const { id } = useParams<{ id: string }>();
  const meetingConfig = useMeeting({ id });
  return (
    <Center>
      {/* <div>NEW MEETING {id}</div> */}
      <pre>{JSON.stringify(meetingConfig, null, 2)}</pre>
    </Center>
  );
};
