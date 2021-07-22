import { useToast } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useMeeting, UseMeetingReturn } from './useMeeting';
import Room from 'src/twilio-components/Room/Room';
import { VideoProvider } from 'src/twilio-components/VideoProvider';
import useConnectionOptions from 'src/utils/useConnectionOptions/useConnectionOptions';
import useVideoContext from 'src/hooks/useVideoContext/useVideoContext';
import { MuiThemeProvider, styled } from '@material-ui/core/styles';
import theme from 'src/theme';
import PreJoinScreens from 'src/twilio-components/PreJoinScreens/PreJoinScreens';
import { EmotionDetector } from 'src/components/EmotionDetector';
import { useMeQuery } from 'src/hooks/useMeQuery';
import { EmotionReceiver } from 'src/components/EmotionReceiver';
import { useState } from 'react';
import { Chart } from './Chart';
export enum Emotions {
  HAPPY = 'Happy',
  NEUTRAL = 'Neutral',
  SAD = 'Sad',
  SURPRISED = 'Surprised',
  DISGUSTED = 'Disgusted',
  FEARFUL = 'Fearful',
  OUT = 'Out',
  ANGRY = 'Angry',
}
const initialState = {
  Angry: 0,
  Disgusted: 0,
  Fearful: 0,
  Happy: 0,
  Neutral: 0,
  Out: 0,
  Sad: 0,
  Surprised: 0,
} as Record<Emotions, number>;

export const Meeting = () => {
  const connectionOptions = useConnectionOptions();
  const { id } = useParams<{ id: string }>();
  const toast = useToast();
  const meetingConfig = useMeeting({ id });

  return (
    <MuiThemeProvider theme={theme}>
      <VideoProvider
        options={connectionOptions}
        onError={(error) =>
          toast({ description: error.message, status: 'error' })
        }
      >
        <HarlemRiver
          meetingConfig={meetingConfig}
          isLoading={meetingConfig.isLoading}
        />
      </VideoProvider>
    </MuiThemeProvider>
  );
};

// xoxox
function HarlemRiver({
  meetingConfig,
  isLoading,
}: {
  meetingConfig: UseMeetingReturn;
  isLoading: boolean;
}) {
  const { room } = useVideoContext();
  const me = useMeQuery().data;
  const [emotions, setEmotions] = useState(initialState);
  return (
    <>
      <Container style={{ height: '100vh' }}>
        {room?.state === 'disconnected' || !room ? (
          <PreJoinScreens isFetching={isLoading} token={meetingConfig.token!} />
        ) : (
          <Room />
        )}
        {me?.role === 'student' && <EmotionDetector />}
        {me?.role === 'instructor' && (
          <>
            <EmotionReceiver setEmotions={setEmotions} />
            {room?.state === 'connected' && <Chart emotions={emotions} />}
          </>
        )}
      </Container>
    </>
  );
}

const Container = styled('div')({
  display: 'grid',
  gridTemplateRows: '1fr auto',
});
