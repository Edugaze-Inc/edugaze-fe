import { useRef, useEffect, useState } from 'react';
import * as faceapi from '@vladmandic/face-api';
import { useDebounce } from 'use-debounce/lib';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';
import { useMeQuery } from 'src/hooks/useMeQuery';

export const socket = io('http://134.209.132.84:4004/');

export function EmotionDetector() {
  const { id: meetingId } = useParams<{ id: string }>();
  const [emotion, setEmotion] = useState('');
  const debouncedEmotion = useDebounce(emotion, 250)[0];
  const me = useMeQuery().data!;
  const videoEl = useRef<HTMLVideoElement | null>(null);
  let requestRef = useRef<number>();
  async function init() {
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/model');
    await faceapi.nets.faceExpressionNet.loadFromUri('/model');
  }

  useEffect(() => {
    init();
    socket.emit('join', { sid: `${meetingId}-${me.username}` });

    if (!videoEl) {
      return;
    }
    let video = videoEl.current;

    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      // @ts-ignore: Object is possibly 'null'.
      video.srcObject = stream;
      // @ts-ignore: Object is possibly 'null'.
      video.play();
    });

    video!.addEventListener('playing', detectEmotions);

    function detectEmotions() {
      async function step() {
        const results = await faceapi
          .detectSingleFace(videoEl.current)
          .withFaceExpressions();

        if (results?.expressions) {
          var highestVal = Math.max.apply(
              null,
              Object.values(results?.expressions)
            ),
            highestEmotion = Object.keys(results?.expressions).find(function (
              a
            ) {
              return results?.expressions[a] === highestVal;
            });
        }
        if (highestEmotion) {
          setEmotion(highestEmotion);
        } else {
          setEmotion('out');
        }

        requestRef.current = requestAnimationFrame(step);
      }

      requestRef.current = requestAnimationFrame(step);
    }
    return () => {
      video!.removeEventListener('playing', detectEmotions);
    };
  }, [me.username, meetingId, videoEl]);

  useEffect(() => {
    !!debouncedEmotion &&
      socket.emit('emotion update', {
        msg: debouncedEmotion,
        id: `${meetingId}-${me.username}`,
      });
    console.log(debouncedEmotion);
  }, [debouncedEmotion, me.username, meetingId]);

  return (
    <video
      ref={videoEl}
      style={{
        visibility: 'hidden',
      }}
    />
  );
}
