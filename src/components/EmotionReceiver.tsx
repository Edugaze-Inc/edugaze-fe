import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Emotions } from 'src/pages/meeting/Meeting';
import { socket } from './EmotionDetector';

type Props = {
  setEmotions: (emotions: Record<Emotions, number>) => void;
};
export function EmotionReceiver({ setEmotions }: Props) {
  const { id: meetingId } = useParams<{ id: string }>();
  useEffect(() => {
    socket.emit('join', { meeting: `${meetingId}` });
    socket.on('emotion update', (msge) => {
      const msg = JSON.parse(msge);
      console.log('AAAAH', msge);
      setEmotions({
        Angry: msg.angry,
        Sad: msg.sad,
        Disgusted: msg.disgusted,
        Fearful: msg.fearful,
        Happy: msg.happy,
        Neutral: msg.neutral,
        Out: msg.out,
        Surprised: msg.surprised,
      });
    });
  }, [meetingId, setEmotions]);
  return null;
}
