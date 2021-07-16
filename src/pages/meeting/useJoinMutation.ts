import axios, { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

export function useJoinMutation(
  id: string,
  options?: UseMutationOptions<string, AxiosError>
) {
  const { mutate: join, ...rest } = useMutation<string, AxiosError>(
    () =>
      axios
        .post(`http://134.209.132.81:4000/api/v1/meetings/join/${id}`)
        .then((res) => res.data),
    options
  );
  return { join, ...rest };
}
