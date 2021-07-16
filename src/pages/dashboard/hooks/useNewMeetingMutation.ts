import axios, { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { invalidateMeetingsQuery, Meeting } from './useMeetingsQuery';

type BaseMeeting = Omit<Omit<Omit<Meeting, 'host'>, 'status'>, '_id'>;
export function useNewMeetingMutation(
  options?: UseMutationOptions<unknown, AxiosError, BaseMeeting>
) {
  const { mutate: createMeating, ...rest } = useMutation<
    unknown,
    AxiosError,
    BaseMeeting
  >(
    (params) =>
      axios.post('http://134.209.132.81:4000/api/v1/meetings/new', {
        ...params,
        startTime: new Date(params.startTime).toISOString(),
        endTime: new Date(params.endTime).toISOString(),
      } as BaseMeeting),
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
