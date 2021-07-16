import { join } from 'path';
import { useEffect, useState } from 'react';
import { Meeting } from '../dashboard/hooks/useMeetingsQuery';
import { useJoinMutation } from './useJoinMutation';
import { useSubscribeMutation } from './useSubscribeMutation';

type UseMeetingParams = {
  id: string;
  onError?: (error: Error) => void;
  onSuccess?: (token: string, meeting: Meeting) => void;
};
type UseMeetingReturn =
  | {
      isSuccess: true;
      token: string;
      meeting: Meeting;
      isLoading: false;
      error: null;
    }
  | {
      isSuccess: false;
      token: undefined;
      meeting: undefined;
      isLoading: true;
      error: null;
    }
  | {
      isSuccess: false;
      token: undefined;
      meeting: undefined;
      isLoading: false;
      error: Error;
    };

export function useMeeting({ id, onError, onSuccess }: UseMeetingParams) {
  const {
    subscribe,
    isLoading: isSubscribing,
    error: subscribeError,
    data: meeting,
  } = useSubscribeMutation(id, {
    onSuccess: (meeting) => {
      if (meeting.status === 'current') {
        join();
      }
    },
    onError: onError,
  });

  const {
    join,
    data: token,
    error: joinError,
    isLoading: isJoining,
    isSuccess: isJoinSuccess,
  } = useJoinMutation(id, {
    onSuccess: (token) => onSuccess?.(token, meeting!),
    onError: onError,
  });

  useEffect(() => {
    subscribe();
  }, [subscribe]);

  return {
    token,
    isSuccess:
      (meeting?.status === 'current' && isJoinSuccess) ||
      meeting?.status === 'incoming',
    isLoading: isJoining || isSubscribing,
    meeting: meeting,
    error: subscribeError ? subscribeError : joinError,
  } as UseMeetingReturn;
}
