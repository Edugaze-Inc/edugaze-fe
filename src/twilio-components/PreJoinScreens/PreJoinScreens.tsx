import React, { useState, useEffect, FormEvent } from 'react';
import DeviceSelectionScreen from './DeviceSelectionScreen/DeviceSelectionScreen';
import MediaErrorSnackbar from './MediaErrorSnackbar/MediaErrorSnackbar';
import RoomNameScreen from './RoomNameScreen/RoomNameScreen';
import useVideoContext from '../../hooks/useVideoContext/useVideoContext';
import { useMeQuery } from 'src/hooks/useMeQuery';

export enum Steps {
  roomNameStep,
  deviceSelectionStep,
}

export default function PreJoinScreens({
  isFetching,
  token,
}: {
  isFetching: boolean;
  token: string;
}) {
  const { getAudioAndVideoTracks } = useVideoContext();
  const { URLRoomName } = { URLRoomName: 'room-gdeda' };
  const [step, setStep] = useState(Steps.roomNameStep);

  const { data: me } = useMeQuery();
  const [name, setName] = useState<string>(me?.username || '');
  const [roomName, setRoomName] = useState<string>('');

  const [mediaError, setMediaError] = useState<Error>();

  useEffect(() => {
    if (URLRoomName) {
      setRoomName(URLRoomName);
      if (me?.username) {
        setStep(Steps.deviceSelectionStep);
      }
    }
  }, [URLRoomName, me?.username]);

  useEffect(() => {
    if (step === Steps.deviceSelectionStep && !mediaError) {
      getAudioAndVideoTracks().catch((error) => {
        console.log('Error acquiring local media:');
        console.dir(error);
        setMediaError(error);
      });
    }
  }, [getAudioAndVideoTracks, step, mediaError]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // If this app is deployed as a twilio function, don't change the URL because routing isn't supported.
    if (!window.location.origin.includes('twil.io')) {
      window.history.replaceState(
        null,
        '',
        window.encodeURI(`/room/${roomName}${window.location.search || ''}`)
      );
    }
    setStep(Steps.deviceSelectionStep);
  };

  return (
    <>
      <MediaErrorSnackbar error={mediaError} />
      {step === Steps.roomNameStep && (
        <RoomNameScreen
          name={name}
          roomName={roomName}
          setName={setName}
          setRoomName={setRoomName}
          handleSubmit={handleSubmit}
        />
      )}

      {step === Steps.deviceSelectionStep && (
        <DeviceSelectionScreen
          isFetching={isFetching}
          token={token}
          name={name}
          roomName={roomName}
          setStep={setStep}
        />
      )}
    </>
  );
}
