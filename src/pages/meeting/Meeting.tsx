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
        <River
          meetingConfig={meetingConfig}
          isLoading={meetingConfig.isLoading}
        />
      </VideoProvider>
    </MuiThemeProvider>
  );
};

function River({
  meetingConfig,
  isLoading,
}: {
  meetingConfig: UseMeetingReturn;
  isLoading: boolean;
}) {
  const { room } = useVideoContext();
  const me = useMeQuery().data;

  return (
    <Container style={{ height: '100vh' }}>
      {room?.state === 'disconnected' || !room ? (
        <PreJoinScreens isFetching={isLoading} token={meetingConfig.token!} />
      ) : (
        <Room />
      )}
      {me?.role === 'student' && <EmotionDetector />}
      {me?.role === 'instructor' && <EmotionReceiver />}
    </Container>
  );
}

const Container = styled('div')({
  display: 'grid',
  gridTemplateRows: '1fr auto',
});
