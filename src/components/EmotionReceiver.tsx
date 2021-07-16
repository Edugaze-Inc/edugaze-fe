import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { socket } from './EmotionDetector';

export function EmotionReceiver() {
  const { id: meetingId } = useParams<{ id: string }>();
  useEffect(() => {
    socket.emit('join', { sid: `${meetingId}` });
    socket.on('emotion update', (msg) => {
      console.log('AAAAH', msg);
    });
  }, [meetingId]);
  return null;
}
