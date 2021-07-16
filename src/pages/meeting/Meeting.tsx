import { Center } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useMeeting } from './useMeeting';
import { connect } from 'twilio-video';
import { useEffect } from 'react';
export const Meeting = () => {
  const { id } = useParams<{ id: string }>();
  const meetingConfig = useMeeting({ id });
  // console.log(meetingConfig);
  useEffect(() => {
    if (meetingConfig.token)
      connect(meetingConfig.token)
        .then((res) => console.log(res))
        .catch(console.error);
  }, [meetingConfig.token]);
  return (
    <Center>
      {/* <div>NEW MEETING {id}</div> */}
      <pre>{JSON.stringify(meetingConfig, null, 2)}</pre>
    </Center>
  );
};
