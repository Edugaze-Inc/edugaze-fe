import axios from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { baseUrl } from 'src/axios';
import { Meeting } from '../dashboard/hooks/useMeetingsQuery';

export function useSubscribeMutation(
  id: string,
  options?: UseMutationOptions<Meeting, Error>
) {
  const { mutate: subscribe, ...rest } = useMutation<Meeting, Error>(
    () =>
      axios
        .post(`${baseUrl}/meetings/v1/subscribe/${id}`)
        .then((res) => res.data),
    options
  );
  return { subscribe, ...rest };
}
