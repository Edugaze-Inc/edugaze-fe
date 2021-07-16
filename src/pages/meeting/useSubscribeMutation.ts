import axios, { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { Meeting } from '../dashboard/hooks/useMeetingsQuery';

export function useSubscribeMutation(
  id: string,
  options?: UseMutationOptions<Meeting, AxiosError>
) {
  const { mutate: subscribe, ...rest } = useMutation<Meeting, AxiosError>(
    () =>
      axios
        .post(`http://134.209.132.81:4000/api/v1/meetings/subscribe/${id}`)
        .then((res) => res.data),
    options
  );
  return { subscribe, ...rest };
}
