import axios, { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { invalidateMeetingsQuery } from './useMeetingsQuery';

export function useStartMeetingMutation(
  id: string,
  options?: UseMutationOptions<string, AxiosError>
) {
  const { mutate: start, ...rest } = useMutation<string, AxiosError>(
    () =>
      axios
        .post(`http://134.209.132.81:4000/api/v1/meetings/start/${id}`)
        .then((res) => res.data),
    { ...options, onSuccess: invalidateMeetingsQuery }
  );
  return { start, ...rest };
}
