import { useRef, useEffect, useState } from 'react';
import * as faceapi from '@vladmandic/face-api';
import { useDebounce } from 'use-debounce/lib';

export function UseEmotionDetector() {
  const [emotion, setEmotion] = useState({ previous: '', current: '' });
  const debouncedEmotion = useDebounce(emotion, 250, {
    equalityFn: (left, right) => {
      return left.current === right.current && left.previous === right.previous;
    },
  })[0];

  const videoEl = useRef<HTMLVideoElement | null>(null);
  let requestRef = useRef<number>();
  async function init() {
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/model');
    await faceapi.nets.faceExpressionNet.loadFromUri('/model');
  }

  useEffect(() => {
    init();

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
          setEmotion({
            previous: debouncedEmotion.current,
            current: highestEmotion!,
          });
        } else {
          setEmotion({
            previous: debouncedEmotion.current,
            current: 'out'!,
          });
        }

        requestRef.current = requestAnimationFrame(step);
      }

      requestRef.current = requestAnimationFrame(step);
    }
    return () => {
      video!.removeEventListener('playing', detectEmotions);
    };
  }, [videoEl, debouncedEmotion]);

  useEffect(() => {
    //call analysis api here
    console.log(debouncedEmotion);
  }, [debouncedEmotion]);

  return <video ref={videoEl} />;
}
