import { useRef, useEffect } from 'react';
import * as faceapi from '@vladmandic/face-api';

export function useEmotionDetector() {
  const videoEl = useRef<HTMLVideoElement | null>(null);
  let requestRef = useRef<number>();

  useEffect(() => {
    if (!videoEl) {
      return;
    }
    let video = videoEl.current;
    async function init() {
      await faceapi.nets.ssdMobilenetv1.loadFromUri('/model');
      await faceapi.nets.faceExpressionNet.loadFromUri('/model');
    }
    init();

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

        console.log(results?.expressions);

        requestRef.current = requestAnimationFrame(step);
      }

      requestRef.current = requestAnimationFrame(step);
    }
  }, [videoEl]);

  //return <video ref={videoEl} />;
}
