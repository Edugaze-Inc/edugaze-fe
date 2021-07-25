import axios, { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { baseUrl } from 'src/axios';
import { invalidateMeetingsQuery } from './useMeetingsQuery';

export function useStartMeetingMutation(
  id: string,
  options?: UseMutationOptions<string, AxiosError>
) {
  const { mutate: start, ...rest } = useMutation<string, AxiosError>(
    () =>
      axios.post(`${baseUrl}/meetings/v1/start/${id}`).then((res) => res.data),
    {
      ...options,
      onSuccess: (...params) => {
        invalidateMeetingsQuery();
        options?.onSuccess?.(...params);
      },
    }
  );
  return { start, ...rest };
}
