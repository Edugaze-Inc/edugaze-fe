import axios, { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { invalidateMeetingsQuery, Meeting } from './useMeetingsQuery';

export function useNewMeetingMutation(
  options?: UseMutationOptions<unknown, AxiosError, Omit<Meeting, 'host'>>
) {
  const { mutate: createMeating, ...rest } = useMutation<
    unknown,
    AxiosError,
    Omit<Meeting, 'host'>
  >(
    (params) =>
      axios.post('http://134.209.132.81:4000/api/v1/meetings/new', {
        ...params,
        startTime: new Date(params.startTime).toISOString(),
        endTime: new Date(params.endTime).toISOString(),
      } as Meeting),
    {
      ...options,
      onSuccess: (...params) => {
        invalidateMeetingsQuery();
        options?.onSuccess?.(...params);
      },
    }
  );
  return { createMeating, ...rest };
}
