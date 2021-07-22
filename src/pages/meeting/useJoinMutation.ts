import axios from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { baseUrl } from 'src/axios';

export function useJoinMutation(
  id: string,
  options?: UseMutationOptions<string, Error>
) {
  const { mutate: join, ...rest } = useMutation<string, Error>(
    () =>
      axios.post(`${baseUrl}/meetings/v1/join/${id}`).then((res) => res.data),
    options
  );
  return { join, ...rest };
}
